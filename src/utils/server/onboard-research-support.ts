import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

const getShinkai6500OperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 62,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 62,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 62,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 62,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 62,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 62,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 62,
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

const getROVOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 63,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 63,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 63,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 63,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 63,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 63,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 63,
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

const getAUVOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 64,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 64,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 64,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 64,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 64,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 64,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 64,
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

const getDeepTowOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 65,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 65,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 65,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 65,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 65,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 65,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 65,
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

const getSCSMCSOperationOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 66,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 66,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 66,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 66,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 66,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 66,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 66,
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

const getOBSOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 67,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 67,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 67,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 67,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 67,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 67,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 67,
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

const getWaterSamplingOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 68,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 68,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 68,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 68,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 68,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 68,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 68,
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

const getSedimentSamplingOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 69,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 69,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 69,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 69,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 69,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 69,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 69,
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

const getPortableInstrumentsOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 70,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 70,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 70,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 70,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 70,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 70,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 70,
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

const getBuiltInEquipmentsOperationRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 71,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 71,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 71,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 71,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 71,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 71,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 71,
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

const getShipCrewRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 72,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 72,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 72,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 72,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 72,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 72,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 72,
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

export const getOnboardResearchSupportRatings = async () => {
  const [
    shinkai6500OperationRating,
    ROVOperationRating,
    AUVOperationRating,
    deepTowOperationRating,
    SCSMCSOperationRating,
    OBSOperationRating,
    waterSamplingOperationRating,
    sedimentSamplingOperationRating,
    portableInstrumentsOperationRating,
    builtInEquipmentsOperationRating,
    shipCrewRating,
  ] = await Promise.all([
    getShinkai6500OperationRatingDataset(),
    getROVOperationRatingDataset(),
    getAUVOperationRatingDataset(),
    getDeepTowOperationRatingDataset(),
    getSCSMCSOperationOperationRatingDataset(),
    getOBSOperationRatingDataset(),
    getWaterSamplingOperationRatingDataset(),
    getSedimentSamplingOperationRatingDataset(),
    getPortableInstrumentsOperationRatingDataset(),
    getBuiltInEquipmentsOperationRatingDataset(),
    getShipCrewRatingDataset(),
  ]);

  const data = [
    {
      title: 'Shinkai 6500 Operation',
      dataset: shinkai6500OperationRating,
    },
    {
      title: 'ROV Operation',
      dataset: ROVOperationRating,
    },
    {
      title: 'AUV Operation',
      dataset: AUVOperationRating,
    },
    {
      title: 'Deep Tow Operation',
      dataset: SCSMCSOperationRating,
    },
    {
      title: 'SCS/MCS Operation',
      dataset: SCSMCSOperationRating,
    },
    {
      title: 'OBS Operation',
      dataset: OBSOperationRating,
    },
    {
      title: 'Water Sampling Operation',
      dataset: waterSamplingOperationRating,
    },
    {
      title: 'Sediment Sampling Operation',
      dataset: sedimentSamplingOperationRating,
    },
    {
      title: 'Portable Instruments Operation',
      dataset: portableInstrumentsOperationRating,
    },
    {
      title: 'Built-in Equipments Operation',
      dataset: builtInEquipmentsOperationRating,
    },
    {
      title: 'Ship Crew',
      dataset: shipCrewRating,
    },
  ];

  return data;
};
