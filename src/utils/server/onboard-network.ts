import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

const getLANRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 74,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 74,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 74,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 74,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 74,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 74,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 74,
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

const getLANSettingGuideRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 75,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 75,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 75,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 75,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 75,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 75,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 75,
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

const getEmailRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 76,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 76,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 76,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 76,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 76,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 76,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 76,
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

const getDataAccessRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 77,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 77,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 77,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 77,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 77,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 77,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 77,
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

const getDataTimingRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 78,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 78,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 78,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 78,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 78,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 78,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 78,
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

export const getOnboardNetworkRatings = async () => {
  const [
    LANRating,
    LANSettingGuideRating,
    emailRating,
    dataAccessRating,
    dataTimingRating,
  ] = await Promise.all([
    getLANRatingDataset(),
    getLANSettingGuideRatingDataset(),
    getEmailRatingDataset(),
    getDataAccessRatingDataset(),
    getDataTimingRatingDataset(),
  ]);

  const data = [
    {
      title: 'LAN',
      dataset: LANRating,
    },
    {
      title: 'LAN Setting Guide',
      dataset: LANSettingGuideRating,
    },
    {
      title: 'Email',
      dataset: emailRating,
    },
    {
      title: 'Data Access',
      dataset: dataAccessRating,
    },
    {
      title: 'Data Timing',
      dataset: dataTimingRating,
    },
  ];

  return data;
};
