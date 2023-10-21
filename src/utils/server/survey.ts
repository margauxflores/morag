import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';
import { formatDate } from '@/utils/date';

export const getSurveyData = async () => {
  const totalCruises = await prisma.researcher.groupBy({
    by: 'cruise_id',
    _count: {
      cruise_id: true,
    },
  });

  const totalEvaluatedCruises = await prisma.responder.groupBy({
    by: ['cruise_id'],
    _count: {
      cruise_id: true,
    },
  });

  const cruiseResponseRate = calculatePercentage(
    totalEvaluatedCruises.length,
    totalCruises.length,
  );

  const responder = await prisma.responder.count();

  // TODO: Clean up total researchers logic
  const researcher = await prisma.researcher.count();
  const researchers = await prisma.researcher.findMany({
    select: {
      cruise: {
        select: {
          end_date: true,
        },
      },
    },
  });
  const researcherResponseRate = calculatePercentage(responder, researcher);
  const endDates = researchers.flatMap((r) =>
    r.cruise ? [r.cruise.end_date] : [],
  );

  // console.log(endDates.map((item) => new Date(item!)).sort((a, b) => b - a));

  const data = [
    {
      name: 'Total Cruises',
      stat: totalCruises.length.toString(),
    },
    {
      name: 'Total Evaluated Cruises',
      stat: totalEvaluatedCruises.length.toString(),
    },
    {
      name: 'Cruise Response Rate',
      stat: `${cruiseResponseRate}%`,
    },
    { name: 'Total Researchers', stat: researcher.toLocaleString() },
    { name: 'Total Responders', stat: responder.toLocaleString() },
    {
      name: 'Researchers Response Rate',
      stat: `${researcherResponseRate.toLocaleString()}%`,
    },
  ];

  return data;
};
