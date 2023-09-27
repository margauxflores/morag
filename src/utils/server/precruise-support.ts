import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

const getVesselsAndToolsGuideRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 21,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 21,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 21,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 21,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 21,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 21,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 21,
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

const getAdvancedVesselsAndToolsGuideRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 22,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 22,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 22,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 22,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 22,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 22,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 22,
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

const getlifeOnboardToolsRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 23,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 23,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 23,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 23,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 23,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 23,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 23,
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

const getLogisticsRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 24,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 24,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 24,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 24,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 24,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 24,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 24,
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

const getBoardGuideRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 25,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 25,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 25,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 25,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 25,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 25,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 25,
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

const getRiskAssessmentRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 26,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 26,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 26,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 26,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 26,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 26,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 26,
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
const getOverallPrecruiseSupportRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 27,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 27,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 27,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 27,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 27,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 27,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 27,
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

export const getPrecruiseSupportRatings = async () => {
  const [
    vesselsAndToolsGuideRating,
    advancedVesselsAndToolsGuideRating,
    lifeOnboardToolsRating,
    logisticsRating,
    boardingGuideRating,
    riskAssessmentRating,
    overallPrecruiseSupportRating,
  ] = await Promise.all([
    getVesselsAndToolsGuideRatingDataset(),
    getAdvancedVesselsAndToolsGuideRatingDataset(),
    getlifeOnboardToolsRatingDataset(),
    getLogisticsRatingDataset(),
    getBoardGuideRatingDataset(),
    getRiskAssessmentRatingDataset(),
    getOverallPrecruiseSupportRatingDataset(),
  ]);

  const data = [
    {
      title: 'Vessels and Tools Guide',
      dataset: vesselsAndToolsGuideRating,
    },
    {
      title: 'Advanced Vessels and Tools Guide',
      dataset: advancedVesselsAndToolsGuideRating,
    },
    {
      title: 'Life Onboard Tools',
      dataset: lifeOnboardToolsRating,
    },
    {
      title: 'Logistics',
      dataset: logisticsRating,
    },
    {
      title: 'Boarding Guide',
      dataset: boardingGuideRating,
    },
    {
      title: 'Risk Assessment',
      dataset: riskAssessmentRating,
    },
    {
      title: 'Overall Precruise Support',
      dataset: overallPrecruiseSupportRating,
    },
  ];

  return data;
};
