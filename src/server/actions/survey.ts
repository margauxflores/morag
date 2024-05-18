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
    ...(startDate &&
      endDate && {
        cruise: {
          AND: [
            { start_date: { gte: new Date(startDate) } },
            { end_date: { lte: new Date(endDate) } },
          ],
        },
      }),
  };

  const [totalCruises, totalEvaluatedCruises] = await prisma.$transaction([
    prisma.researcher.groupBy({
      by: ['cruise_id'],
      where: {
        cruise: {
          vessel_id: vesselId, // This assumes vesselId is always defined; you might adjust based on your logic
          ...(startDate &&
            endDate && {
              AND: [
                { start_date: { gte: new Date(startDate) } },
                { end_date: { lte: new Date(endDate) } },
              ],
            }),
        },
      },
      _count: {
        cruise_id: true,
      },
    }),
    prisma.responder.groupBy({
      by: ['cruise_id'],
      _count: {
        cruise_id: true,
      },
      where: {
        // Check for vesselId directly related to the cruise
        ...(vesselId && { cruise: { vessel_id: vesselId } }),
        // Nested conditions for start_date and end_date within the cruise relation
        ...(startDate &&
          endDate && {
            cruise: {
              AND: [
                { start_date: { gte: new Date(startDate) } },
                { end_date: { lte: new Date(endDate) } },
              ],
            },
          }),
      },
      orderBy: {
        cruise_id: 'asc',
      },
    }),
  ]);

  const cruiseResponseRate =
    totalCruises.length > 0
      ? calculatePercentage(totalEvaluatedCruises.length, totalCruises.length)
      : 0;

  const [responder, researcher] = await prisma.$transaction([
    prisma.responder.count(),
    prisma.researcher.count(),
  ]);

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
        // Check for vesselId directly related to the cruise
        ...(vesselId && { cruise: { vessel_id: vesselId } }),
        // Nested conditions for start_date and end_date within the cruise relation
        ...(startDate &&
          endDate && {
            cruise: {
              AND: [
                { start_date: { gte: new Date(startDate) } },
                { end_date: { lte: new Date(endDate) } },
              ],
            },
          }),
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
        // Check for vesselId directly related to the cruise
        ...(vesselId && { cruise: { vessel_id: vesselId } }),
        // Nested conditions for start_date and end_date within the cruise relation
        ...(startDate &&
          endDate && {
            cruise: {
              AND: [
                { start_date: { gte: new Date(startDate) } },
                { end_date: { lte: new Date(endDate) } },
              ],
            },
          }),
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
        // Check for vesselId directly related to the cruise
        ...(vesselId && { cruise: { vessel_id: vesselId } }),
        // Nested conditions for start_date and end_date within the cruise relation
        ...(startDate &&
          endDate && {
            cruise: {
              AND: [
                { start_date: { gte: new Date(startDate) } },
                { end_date: { lte: new Date(endDate) } },
              ],
            },
          }),
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
      ...(vesselId && {
        cruise: {
          vessel_id: vesselId,
        },
      }),
      ...(startDate &&
        endDate && {
          AND: [
            {
              cruise: {
                start_date: {
                  gte: new Date(startDate),
                },
              },
            },
            {
              cruise: {
                end_date: {
                  lte: new Date(endDate),
                },
              },
            },
          ],
        }),
    },
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
