import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

const getGeneralRatingDataSet = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 1,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 1,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 1,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 1,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 1,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 1,
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

const getSamplingRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 2,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 2,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 2,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 2,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 2,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 2,
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

const getCommunicationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 3,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 3,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 3,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 3,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 3,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 3,
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

export const getGeneralRatings = async () => {
  const [generalRating, samplingRating, communicationRating] =
    await Promise.all([
      getGeneralRatingDataSet(),
      getSamplingRatingDataset(),
      getCommunicationRatingDataset(),
    ]);

  const data = [
    {
      title: 'Overall',
      dataset: generalRating,
    },
    {
      title: 'Sampling and Data',
      dataset: samplingRating,
    },
    {
      title: 'Communication',
      dataset: communicationRating,
    },
  ];

  return data;
};
