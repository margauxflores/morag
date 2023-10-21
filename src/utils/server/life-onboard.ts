import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

const getCleanlinessRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 80,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 80,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 80,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 80,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 80,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 80,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 80,
          rating_id: 6,
        },
      }),
    ]);

  const data = [
    {
      name: 'Unacceptable',
      value: calculatePercentage(unacceptable, total),
    },
    {
      name: 'Poor',
      value: calculatePercentage(poor, total),
    },
    {
      name: 'Adequate',
      value: calculatePercentage(adequate, total),
    },
    {
      name: 'Good',
      value: calculatePercentage(good, total),
    },
    {
      name: 'Excellent',
      value: calculatePercentage(excellent, total),
    },
    {
      name: 'Not Applicable',
      value: calculatePercentage(notApplicable, total),
    },
  ];

  return data;
};

const getFacilitiesRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 81,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 81,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 81,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 81,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 81,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 81,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 81,
          rating_id: 6,
        },
      }),
    ]);

  const data = [
    {
      name: 'Unacceptable',
      value: calculatePercentage(unacceptable, total),
    },
    {
      name: 'Poor',
      value: calculatePercentage(poor, total),
    },
    {
      name: 'Adequate',
      value: calculatePercentage(adequate, total),
    },
    {
      name: 'Good',
      value: calculatePercentage(good, total),
    },
    {
      name: 'Excellent',
      value: calculatePercentage(excellent, total),
    },
    {
      name: 'Not Applicable',
      value: calculatePercentage(notApplicable, total),
    },
  ];

  return data;
};

const getMealsRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 82,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 82,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 82,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 82,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 82,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 82,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 82,
          rating_id: 6,
        },
      }),
    ]);

  const data = [
    {
      name: 'Unacceptable',
      value: calculatePercentage(unacceptable, total),
    },
    {
      name: 'Poor',
      value: calculatePercentage(poor, total),
    },
    {
      name: 'Adequate',
      value: calculatePercentage(adequate, total),
    },
    {
      name: 'Good',
      value: calculatePercentage(good, total),
    },
    {
      name: 'Excellent',
      value: calculatePercentage(excellent, total),
    },
    {
      name: 'Not Applicable',
      value: calculatePercentage(notApplicable, total),
    },
  ];

  return data;
};

const getDiningRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 83,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 83,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 83,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 83,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 83,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 83,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 83,
          rating_id: 6,
        },
      }),
    ]);

  const data = [
    {
      name: 'Unacceptable',
      value: calculatePercentage(unacceptable, total),
    },
    {
      name: 'Poor',
      value: calculatePercentage(poor, total),
    },
    {
      name: 'Adequate',
      value: calculatePercentage(adequate, total),
    },
    {
      name: 'Good',
      value: calculatePercentage(good, total),
    },
    {
      name: 'Excellent',
      value: calculatePercentage(excellent, total),
    },
    {
      name: 'Not Applicable',
      value: calculatePercentage(notApplicable, total),
    },
  ];

  return data;
};

export const getLifeOnboardRatings = async () => {
  const [cleanlinessRating, facilitiesRating, mealsRating, diningRating] =
    await Promise.all([
      getCleanlinessRatingDataset(),
      getFacilitiesRatingDataset(),
      getMealsRatingDataset(),
      getDiningRatingDataset(),
    ]);

  const data = [
    {
      title: 'Cleanliness',
      dataset: cleanlinessRating,
    },
    {
      title: 'Facilities',
      dataset: facilitiesRating,
    },
    {
      title: 'Meals',
      dataset: mealsRating,
    },
    {
      title: 'Dining',
      dataset: diningRating,
    },
  ];

  return data;
};
