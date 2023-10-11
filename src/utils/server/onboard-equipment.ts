import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

const getLabPowerSupplyRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 30,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 30,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 30,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 30,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 30,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 30,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 30,
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

const getLabLayoutRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 31,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 31,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 31,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 31,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 31,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 31,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 31,
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

const getLabLightingRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 32,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 32,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 32,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 32,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 32,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 32,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 32,
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

const getMBESRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 33,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 33,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 33,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 33,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 33,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 33,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 33,
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

const getSBPRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 34,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 34,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 34,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 34,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 34,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 34,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 34,
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

const getXBTXCTDRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 35,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 35,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 35,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 35,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 35,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 35,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 35,
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

const getPDRRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 36,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 36,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 36,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 36,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 36,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 36,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 36,
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

const getADCPRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 37,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 37,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 37,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 37,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 37,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 37,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 37,
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

const getDopplerRadarRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 38,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 38,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 38,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 38,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 38,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 38,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 38,
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

const getGravitometerRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 39,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 39,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 39,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 39,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 39,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 39,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 39,
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

const getMagnetometerRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 40,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 40,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 40,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 40,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 40,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 40,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 40,
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

const getFishFinderRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 41,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 41,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 41,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 41,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 41,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 41,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 41,
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

const getWeatherMonitorRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 42,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 42,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 42,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 42,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 42,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 42,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 42,
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

const getShinkai6500RatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 43,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 43,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 43,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 43,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 43,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 43,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 43,
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

const getKaikoRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 44,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 44,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 44,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 44,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 44,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 44,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 44,
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

const getHyperDolphinRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 45,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 45,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 45,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 45,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 45,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 45,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 45,
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

const getKMROVRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 46,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 46,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 46,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 46,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 46,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 46,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 46,
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

const getDeepTowRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 47,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 47,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 47,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 47,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 47,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 47,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 47,
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

const getYKDTRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 48,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 48,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 48,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 48,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 48,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 48,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 48,
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

const getUrashimaAUVRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 49,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 49,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 49,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 49,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 49,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 49,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 49,
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

const getJinbeiAUVRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 50,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 50,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 50,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 50,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 50,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 50,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 50,
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

const getOBSRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 51,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 51,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 51,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 51,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 51,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 51,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 51,
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

const getSCSRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 52,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 52,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 52,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 52,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 52,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 52,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 52,
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

const getMCSRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 53,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 53,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 53,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 53,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 53,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 53,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 53,
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

const getWaterSamplingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 54,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 54,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 54,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 54,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 54,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 54,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 54,
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

const getCTDRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 55,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 55,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 55,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 55,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 55,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 55,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 55,
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

const getNormalPistonCoringRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 56,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 56,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 56,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 56,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 56,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 56,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 56,
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

const getDredgeRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 57,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 57,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 57,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 57,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 57,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 57,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 57,
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

const getPowerGrabRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 58,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 58,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 58,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 58,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 58,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 58,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 58,
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

const getBMSRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 59,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 59,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 59,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 59,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 59,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 59,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 59,
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

const getGCPRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 60,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 60,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 60,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 60,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 60,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 60,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 60,
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

export const getOnboardEquipmentRatings = async () => {
  const [
    labPowerSupplyRating,
    labLayoutRating,
    labLightingRating,
    MBESRating,
    SBPRating,
    XBTXCTDRating,
    PDRRating,
    ADCPRating,
    dopplerRadarRating,
    gravitometerRating,
    magnetometerRating,
    fishFinderRating,
    weatherMonitorRating,
    shinkai6500Rating,
    kaikoRating,
    hyperDolphinRating,
    KMROVRating,
    deepTowRating,
    YKDTRating,
    urashimaAUVRating,
    jinbeiAUVRating,
    OBSRating,
    SCSRating,
    MCSRating,
    waterSamplingRating,
    CTDRating,
    normalPistonCoringRating,
    dredgeRating,
    powerGrabRating,
    BMSRating,
    GCPRating,
  ] = await Promise.all([
    getLabPowerSupplyRatingDataset(),
    getLabLayoutRatingDataset(),
    getLabLightingRatingDataset(),
    getMBESRatingDataset(),
    getSBPRatingDataset(),
    getXBTXCTDRatingDataset(),
    getPDRRatingDataset(),
    getADCPRatingDataset(),
    getDopplerRadarRatingDataset(),
    getGravitometerRatingDataset(),
    getMagnetometerRatingDataset(),
    getFishFinderRatingDataset(),
    getWeatherMonitorRatingDataset(),
    getShinkai6500RatingDataset(),
    getKaikoRatingDataset(),
    getHyperDolphinRatingDataset(),
    getKMROVRatingDataset(),
    getDeepTowRatingDataset(),
    getYKDTRatingDataset(),
    getUrashimaAUVRatingDataset(),
    getJinbeiAUVRatingDataset(),
    getOBSRatingDataset(),
    getSCSRatingDataset(),
    getMCSRatingDataset(),
    getWaterSamplingDataset(),
    getCTDRatingDataset(),
    getNormalPistonCoringRatingDataset(),
    getDredgeRatingDataset(),
    getPowerGrabRatingDataset(),
    getBMSRatingDataset(),
    getGCPRatingDataset(),
  ]);

  const data = [
    {
      title: 'Lab Power Supply',
      dataset: labPowerSupplyRating,
    },
    {
      title: 'Lab Layout',
      dataset: labLayoutRating,
    },
    {
      title: 'Lab Lighting',
      dataset: labLightingRating,
    },
    {
      title: 'MBES',
      dataset: MBESRating,
    },
    {
      title: 'SBP',
      dataset: SBPRating,
    },
    {
      title: 'XBT/XCTD',
      dataset: XBTXCTDRating,
    },
    {
      title: 'PDR',
      dataset: PDRRating,
    },
    {
      title: 'ADCP',
      dataset: ADCPRating,
    },
    {
      title: 'Doppler Radar',
      dataset: dopplerRadarRating,
    },
    {
      title: 'Gravitometer',
      dataset: gravitometerRating,
    },
    {
      title: 'Magnetometer',
      dataset: magnetometerRating,
    },
    {
      title: 'Fish Finder',
      dataset: fishFinderRating,
    },
    {
      title: 'Weather Monitor',
      dataset: weatherMonitorRating,
    },
    {
      title: 'Shinkai 6500',
      dataset: shinkai6500Rating,
    },
    {
      title: 'Kaiko',
      dataset: kaikoRating,
    },
    {
      title: 'Hyper Dolphin',
      dataset: hyperDolphinRating,
    },
    {
      title: 'KM-ROV',
      dataset: KMROVRating,
    },
    {
      title: 'Deep Tow',
      dataset: deepTowRating,
    },
    {
      title: 'YKDT',
      dataset: YKDTRating,
    },
    {
      title: 'Urashima AUV',
      dataset: urashimaAUVRating,
    },
    {
      title: 'Jinbei AUV',
      dataset: jinbeiAUVRating,
    },
    {
      title: 'OBS',
      dataset: OBSRating,
    },
    {
      title: 'SCS',
      dataset: SCSRating,
    },
    {
      title: 'MCS',
      dataset: MCSRating,
    },
    {
      title: 'Water Sampling',
      dataset: waterSamplingRating,
    },
    {
      title: 'CTD',
      dataset: CTDRating,
    },
    {
      title: 'Normal Piston Coring',
      dataset: normalPistonCoringRating,
    },
    {
      title: 'Dredge',
      dataset: dredgeRating,
    },
    {
      title: 'Power Grab',
      dataset: powerGrabRating,
    },
    {
      title: 'BMS',
      dataset: BMSRating,
    },
    {
      title: 'GCP',
      dataset: GCPRating,
    },
  ];

  return data;
};
