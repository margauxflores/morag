import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

const getOnboardBriefingRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 5,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 5,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 5,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 5,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 5,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 5,
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

const getEmergencyGuidanceRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 6,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 6,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 6,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 6,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 6,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 6,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 6,
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

const getShipDrillRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 7,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 7,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 7,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 7,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 7,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 7,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 7,
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

const getLabSafetyRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 10,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 10,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 10,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 10,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 10,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 10,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 10,
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

const getSafetyEquipmentRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 11,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 11,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 11,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 11,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 11,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 11,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 11,
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

const getMedicalSupportRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 17,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 17,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 17,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 17,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 17,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 17,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 17,
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

const getOnboardInfectionControlRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 18,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 18,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 18,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 18,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 18,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 18,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 18,
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

const getPrecruiseInfectionControlRatingDataset = async () => {
  const [total, unacceptable, poor, adequate, good, excellent, notApplicable] =
    await Promise.all([
      prisma.response.count({
        where: {
          question_id: 19,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 19,
          rating_id: 1,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 19,
          rating_id: 2,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 19,
          rating_id: 3,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 19,
          rating_id: 4,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 19,
          rating_id: 5,
        },
      }),
      prisma.response.count({
        where: {
          question_id: 19,
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

export const getOnboardSafetyRatings = async () => {
  const [
    onboardBriefingRating,
    emergencyGuidanceRating,
    shipDrillRating,
    labSafetyRating,
    safetyEquipmentRating,
    medicalSupportRating,
    onboardInfectionControlRating,
    precruiseInfectionControlRating,
  ] = await Promise.all([
    getOnboardBriefingRatingDataset(),
    getEmergencyGuidanceRatingDataset(),
    getShipDrillRatingDataset(),
    getLabSafetyRatingDataset(),
    getSafetyEquipmentRatingDataset(),
    getMedicalSupportRatingDataset(),
    getOnboardInfectionControlRatingDataset(),
    getPrecruiseInfectionControlRatingDataset(),
  ]);

  const data = [
    {
      title: 'Onboard Briefing',
      dataset: onboardBriefingRating,
    },
    {
      title: 'Emergency Guidance',
      dataset: emergencyGuidanceRating,
    },
    {
      title: 'Ship Drill',
      dataset: shipDrillRating,
    },
    {
      title: 'Lab Safety',
      dataset: labSafetyRating,
    },
    {
      title: 'Safety Equipment',
      dataset: safetyEquipmentRating,
    },
    {
      title: 'Medical Support',
      dataset: medicalSupportRating,
    },
    {
      title: 'Onboard Infection Control',
      dataset: onboardInfectionControlRating,
    },
    {
      title: 'Precruise Infection Control',
      dataset: precruiseInfectionControlRating,
    },
  ];

  return data;
};
