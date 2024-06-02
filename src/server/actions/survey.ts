import { calculatePercentage, prisma } from '@/utils';

interface SurveyDataParams {
  year?: number;
  vesselId?: number;
  startDate?: string;
  endDate?: string;
}

export const getSurveyData = async ({
  vesselId,
  startDate,
  endDate,
}: SurveyDataParams = {}) => {
  // Prepare conditions based on the optional parameters
  const cruiseConditions = {
    ...(vesselId && { vessel_id: vesselId }),
    ...(startDate &&
      endDate && {
        AND: [
          { start_date: { gte: new Date(startDate) } },
          { end_date: { lte: new Date(endDate) } },
        ],
      }),
  };

  // Count total cruises
  const totalCruises = await prisma.cruise.count({
    where: cruiseConditions,
  });

  // Group responders by cruise_id to count total evaluated cruises
  const totalEvaluatedCruises = await prisma.responder.groupBy({
    by: ['cruise_id'],
    _count: {
      cruise_id: true,
    },
    where: {
      cruise: cruiseConditions,
    },
    orderBy: {
      cruise_id: 'asc',
    },
  });

  // Calculate the cruise response rate
  const evaluatedCruiseCount = totalEvaluatedCruises.length;
  const cruiseResponseRate = calculatePercentage(
    evaluatedCruiseCount,
    totalCruises,
  );

  // Count total responders with conditions
  const totalResponders = await prisma.responder.count({
    where: {
      cruise: cruiseConditions,
    },
  });

  // Count total researchers with conditions
  const totalResearchers = await prisma.researcher.count({
    where: {
      cruise: cruiseConditions,
    },
  });

  // Calculate researcher response rate
  const researcherResponseRate = calculatePercentage(
    totalResponders,
    totalResearchers,
  );

  const surveyData = [
    {
      name: 'Total Cruises',
      stat: totalCruises.toString(),
    },
    {
      name: 'Total Evaluated Cruises',
      stat: evaluatedCruiseCount.toString(),
    },
    {
      name: 'Cruise Response Rate',
      stat: `${cruiseResponseRate}%`,
    },
    { name: 'Total Researchers', stat: totalResearchers.toLocaleString() },
    { name: 'Total Responders', stat: totalResponders.toLocaleString() },
    {
      name: 'Researchers Response Rate',
      stat: `${researcherResponseRate.toLocaleString()}%`,
    },
  ];

  // Responder Age Group Data
  const careerLevelNames = [
    'Professor',
    'Associate Professor',
    'Lecturer',
    'Chief/Senior Researcher',
    'Researcher',
    'JAMSTEC',
    'Postdoctoral Researcher',
    'PhD Student',
    'Graduate Student',
    'Undergraduate Student',
    'Technical Staff',
    'Other',
  ];

  // Generate promises for each career level count
  const careerLevelPromises = careerLevelNames.map((_, index) =>
    prisma.responder.count({
      where: {
        career_level_id: index + 1, // Assuming your IDs start at 1
        cruise: cruiseConditions,
      },
    }),
  );

  // Resolve all promises simultaneously
  const careerLevelCounts = await Promise.all(careerLevelPromises);

  // Map each career level name to its count
  const responderCareerLevelData = careerLevelNames.map((name, index) => ({
    name,
    value: careerLevelCounts[index].toLocaleString(),
  }));

  const ageGroupNames = [
    "10's",
    "20's",
    "30's",
    "40's",
    "50's",
    "60's",
    "Over 60's",
    'N/A',
  ];

  const ageGroupPromises = ageGroupNames.map((_, index) =>
    prisma.responder.count({
      where: {
        age_group_id: index + 1, // Assuming your IDs start at 1
        cruise: cruiseConditions,
      },
    }),
  );

  const ageGroupCounts = await Promise.all(ageGroupPromises);

  const responderAgeGroupData = ageGroupNames.map((name, index) => ({
    name,
    value: ageGroupCounts[index].toLocaleString(),
  }));

  const genderNames = ['Male', 'Female', 'Prefer not to answer'];

  const genderPromises = genderNames.map((_, index) =>
    prisma.responder.count({
      where: {
        gender_id: index + 1, // Assuming your IDs start at 1
        cruise: cruiseConditions,
      },
    }),
  );

  const genderGroupCounts = await Promise.all(genderPromises);

  const responderGenderData = genderNames.map((name, index) => ({
    name,
    value: genderGroupCounts[index].toLocaleString(),
  }));

  const responderNationalitiesCount = await prisma.responder.groupBy({
    by: ['nationality'],
    _count: {
      nationality: true,
    },
    where: {
      cruise: cruiseConditions,
    },
  });

  const nationalitiesData = responderNationalitiesCount.map((item) => {
    return {
      name: item.nationality,
      value: item._count.nationality.toLocaleString(),
    };
  });

  // Predefined question groups
  const questionGroups = [
    'Overall Cruise Evaluation',
    'Cruise Safety',
    'Cruise Support During The Planning Stage',
    'Onboard Research and Survey Equipment',
    'Onboard Network',
    'Life Onboard',
    'Onboard Research Support',
  ];

  // Group responses by question_id and count responses with rating_id 3, 4, or 5
  const positiveResponsesByQuestion = await prisma.response.groupBy({
    by: ['question_id'],
    where: {
      rating_id: {
        in: [3, 4, 5],
      },
      cruise: cruiseConditions,
    },
    _count: {
      id: true,
    },
  });

  // Group total responses by question_id
  const totalResponsesByQuestion = await prisma.response.groupBy({
    by: ['question_id'],
    where: {
      rating_id: {
        not: 6,
      },
      cruise: cruiseConditions,
    },
    _count: {
      id: true,
    },
  });

  // Fetch the corresponding questions with their categories
  const questionIds = totalResponsesByQuestion
    .map((result) => result.question_id)
    .filter((id) => id !== null) as bigint[];

  const questions = await prisma.question.findMany({
    where: {
      id: {
        in: questionIds,
      },
    },
    select: {
      id: true,
      question_category_id: true,
    },
  });

  // Calculate percentages for each question group
  const responsePercentageByCategory = questionGroups.map((name, index) => {
    const questionCategoryId = index + 1; // Assuming IDs start at 1
    const totalResponseCount = questions
      .filter(
        (question) =>
          question.question_category_id === BigInt(questionCategoryId),
      )
      .map(
        (question) =>
          totalResponsesByQuestion.find(
            (result) => result.question_id === question.id,
          )?._count.id || 0,
      )
      .reduce((acc, count) => acc + count, 0);
    const positiveResponseCount = questions
      .filter(
        (question) =>
          question.question_category_id === BigInt(questionCategoryId),
      )
      .map(
        (question) =>
          positiveResponsesByQuestion.find(
            (result) => result.question_id === question.id,
          )?._count.id || 0,
      )
      .reduce((acc, count) => acc + count, 0);
    const percentage =
      totalResponseCount > 0
        ? (positiveResponseCount / totalResponseCount) * 100
        : 0;
    return {
      name,
      value: Math.round(percentage * 100) / 100, // Format percentage to two decimal places as a number
    };
  });

  return [
    {
      name: 'Survey Data',
      value: surveyData,
    },
    {
      name: 'Career Level',
      dataset: responderCareerLevelData,
    },
    {
      name: 'Age Group',
      dataset: responderAgeGroupData,
    },
    {
      name: 'Gender Group',
      dataset: responderGenderData,
    },
    {
      name: 'Nationalities',
      dataset: nationalitiesData,
    },
    {
      name: 'Response Percentage by Question Category',
      dataset: responsePercentageByCategory,
    },
  ];
};
