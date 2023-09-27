import { prisma } from '@/utils/db';

export const getResponderCareerLevelData = async () => {
  const [
    careerLevel1,
    careerLevel2,
    careerLevel3,
    careerLevel4,
    careerLevel5,
    careerLevel6,
    careerLevel7,
    careerLevel8,
    careerLevel9,
    careerLevel10,
    careerLevel11,
    careerLevel12,
  ] = await Promise.all([
    prisma.responder.count({
      where: {
        career_level_id: 1,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 2,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 3,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 4,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 5,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 6,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 7,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 8,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 9,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 10,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 11,
      },
    }),
    prisma.responder.count({
      where: {
        career_level_id: 12,
      },
    }),
  ]);

  const data = [
    {
      name: 'Professor',
      value: careerLevel1.toLocaleString(),
    },
    {
      name: 'Associate Professor',
      value: careerLevel2.toLocaleString(),
    },
    {
      name: 'Lecturer',
      value: careerLevel3.toLocaleString(),
    },
    {
      name: 'Chief/Senior Researcher',
      value: careerLevel4.toLocaleString(),
    },
    {
      name: 'Researcher',
      value: careerLevel5.toLocaleString(),
    },
    {
      name: 'JAMSTEC',
      value: careerLevel6.toLocaleString(),
    },
    {
      name: 'Postdoctoral Researcher',
      value: careerLevel7.toLocaleString(),
    },
    {
      name: 'PhD Student',
      value: careerLevel8.toLocaleString(),
    },
    {
      name: 'Graduate Student',
      value: careerLevel9.toLocaleString(),
    },
    {
      name: 'Undergraduate Student',
      value: careerLevel10.toLocaleString(),
    },
    {
      name: 'Technical Staff',
      value: careerLevel11.toLocaleString(),
    },
    {
      name: 'Other',
      value: careerLevel12.toLocaleString(),
    },
  ];

  return data;
};

export const getResponderGenderData = async () => {
  const [gender1, gender2, gender3] = await Promise.all([
    prisma.responder.count({
      where: {
        gender_id: 1,
      },
    }),
    prisma.responder.count({
      where: {
        gender_id: 2,
      },
    }),
    prisma.responder.count({
      where: {
        gender_id: 3,
      },
    }),
  ]);

  const data = [
    {
      name: 'Male',
      value: gender1.toLocaleString(),
    },
    {
      name: 'Female',
      value: gender2.toLocaleString(),
    },
    {
      name: 'Prefer not to answer',
      value: gender3.toLocaleString(),
    },
  ];

  return data;
};

export const getResponderAgeGroupData = async () => {
  const [
    ageGroup1,
    ageGroup2,
    ageGroup3,
    ageGroup4,
    ageGroup5,
    ageGroup6,
    ageGroup7,
    ageGroup8,
  ] = await Promise.all([
    prisma.responder.count({
      where: {
        age_group_id: 1,
      },
    }),
    prisma.responder.count({
      where: {
        age_group_id: 2,
      },
    }),
    prisma.responder.count({
      where: {
        age_group_id: 3,
      },
    }),
    prisma.responder.count({
      where: {
        age_group_id: 4,
      },
    }),
    prisma.responder.count({
      where: {
        age_group_id: 5,
      },
    }),
    prisma.responder.count({
      where: {
        age_group_id: 6,
      },
    }),
    prisma.responder.count({
      where: {
        age_group_id: 7,
      },
    }),
    prisma.responder.count({
      where: {
        age_group_id: 8,
      },
    }),
  ]);

  const data = [
    {
      name: "10's",
      value: ageGroup1.toLocaleString(),
    },
    {
      name: "20's",
      value: ageGroup2.toLocaleString(),
    },
    {
      name: "30's",
      value: ageGroup3.toLocaleString(),
    },
    {
      name: "40's",
      value: ageGroup4.toLocaleString(),
    },
    {
      name: "50's",
      value: ageGroup5.toLocaleString(),
    },
    {
      name: "60's",
      value: ageGroup6.toLocaleString(),
    },
    {
      name: "Over 60's",
      value: ageGroup7.toLocaleString(),
    },
    {
      name: 'N/A',
      value: ageGroup8.toLocaleString(),
    },
  ];

  return data;
};

export const getResponderNationalityData = async () => {
  const nationality = await prisma.responder.groupBy({
    by: ['nationality'],
    _count: {
      nationality: true,
    },
  });

  const data = nationality.map((item) => {
    return {
      name: item.nationality,
      value: item._count.nationality.toLocaleString(),
    };
  });

  return data;
};