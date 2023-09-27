import { prisma } from '@/utils/db';

export const getResearcherCareerLevelData = async () => {
  const careerLevel = await prisma.researcher.groupBy({
    by: ['career_level'],
    _count: {
      career_level: true,
    },
  });

  const data = careerLevel.map((item) => {
    return { name: item.career_level, value: item._count.career_level };
  });

  return data;
};
