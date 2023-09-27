import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

export const getSurveyData = async () => {
  const totalCruises = await prisma.cruise.count();
  const responder = await prisma.responder.count();
  const researcher = await prisma.researcher.count();
  const researcherResponseRate = calculatePercentage(responder, researcher);

  const data = [
    {
      name: 'Total Cruises',
      stat: totalCruises.toString(),
    },
    { name: 'Total Survey Responses', stat: responder.toLocaleString() },
    { name: 'Cruise Response Rate', stat: 'xxxx' },
    { name: 'Total Researchers', stat: researcher.toLocaleString() },
    { name: 'Total Responders', stat: responder.toLocaleString() },
    {
      name: 'Researchers Response Rate',
      stat: `${researcherResponseRate.toLocaleString()}%`,
    },
  ];

  return data;
};

export const getResponderAgeGroupData = async () => {
  const ageGroup1 = await prisma.responder.count({
    where: {
      age_group_id: 1,
    },
  });

  const ageGroup2 = await prisma.responder.count({
    where: {
      age_group_id: 2,
    },
  });

  const ageGroup3 = await prisma.responder.count({
    where: {
      age_group_id: 3,
    },
  });

  const ageGroup4 = await prisma.responder.count({
    where: {
      age_group_id: 4,
    },
  });

  const ageGroup5 = await prisma.responder.count({
    where: {
      age_group_id: 5,
    },
  });

  const ageGroup6 = await prisma.responder.count({
    where: {
      age_group_id: 6,
    },
  });

  const ageGroup7 = await prisma.responder.count({
    where: {
      age_group_id: 7,
    },
  });

  const ageGroup8 = await prisma.responder.count({
    where: {
      age_group_id: 8,
    },
  });

  const data = [
    {
      name: "10's",
      value: ageGroup1,
    },
    {
      name: "20's",
      value: ageGroup2,
    },
    {
      name: "30's",
      value: ageGroup3,
    },
    {
      name: "40's",
      value: ageGroup4,
    },
    {
      name: "50's",
      value: ageGroup5,
    },
    {
      name: "60's",
      value: ageGroup6,
    },
    {
      name: "Over 60's",
      value: ageGroup7,
    },
    {
      name: 'N/A',
      value: ageGroup8,
    },
  ];

  return data;
};
