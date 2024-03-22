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
  const conditions = {
    ...(vesselId && { vessel_id: vesselId }),
    ...(startDate && {
      start_date: { gte: new Date(startDate).toISOString() },
    }),
    ...(endDate && { end_date: { lte: new Date(endDate).toISOString() } }),
  };

  // Example usage of conditions in a query
  const totalCruises = await prisma.researcher.groupBy({
    by: 'cruise_id',
    ...(Object.keys(conditions).length > 0 ? { where: conditions } : {}),
    _count: {
      cruise_id: true,
    },
  });

  const totalEvaluatedCruises = await prisma.responder.groupBy({
    by: 'cruise_id',
    _count: {
      cruise_id: true,
    },
    ...(Object.keys(conditions).length > 0
      ? {
          where: {
            cruise: {
              ...conditions,
            },
          },
        }
      : {}),
    orderBy: {
      cruise_id: 'asc',
    },
  });

  const cruiseResponseRate = calculatePercentage(
    totalEvaluatedCruises.length,
    totalCruises.length,
  );

  const responder = await prisma.responder.count();
  const researcher = await prisma.researcher.count();

  const researcherResponseRate = calculatePercentage(responder, researcher);

  const surveyData = [
    {
      name: 'Total Cruises',
      stat: totalCruises.length.toString(),
    },
    {
      name: 'Total Evaluated Cruises',
      stat: totalEvaluatedCruises.length.toString(),
    },
    {
      name: 'Cruise Response Rate',
      stat: `${cruiseResponseRate}%`,
    },
    { name: 'Total Researchers', stat: researcher.toLocaleString() },
    { name: 'Total Responders', stat: responder.toLocaleString() },
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
        ...(Object.keys(conditions).length > 0 ? { cruise: conditions } : {}),
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
        ...(Object.keys(conditions).length > 0 ? { cruise: conditions } : {}),
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
        ...(Object.keys(conditions).length > 0 ? { cruise: conditions } : {}),
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
    ...(Object.keys(conditions).length > 0
      ? {
          where: {
            cruise: {
              ...conditions,
            },
          },
        }
      : {}),
  });

  const nationalitiesData = responderNationalitiesCount.map((item) => {
    return {
      name: item.nationality,
      value: item._count.nationality.toLocaleString(),
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
  ];
};
