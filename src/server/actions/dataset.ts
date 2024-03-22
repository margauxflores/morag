import { FilterOptions } from '@/types/data';
import { calculatePercentage, prisma, ratingNames, ratings } from '@/utils';

export const getDataset = async ({
  questionId,
  vesselId,
  startDate,
  endDate,
}: FilterOptions) => {
  const whereClause = (
    questionId: number,
    ratingId?: number,
    vesselId?: number,
    startDate?: string,
    endDate?: string,
  ) => {
    const cruiseConditions = {
      ...(vesselId && { vessel_id: vesselId }),
      ...(startDate && {
        start_date: { gte: new Date(startDate).toISOString() },
      }),
      ...(endDate && { end_date: { lte: new Date(endDate).toISOString() } }),
    };

    return {
      question_id: questionId,
      ...(ratingId && { rating_id: ratingId }),
      ...(Object.keys(cruiseConditions).length > 0 && {
        cruise: cruiseConditions,
      }),
    };
  };

  const totalResponses = await prisma.response.count({
    where: whereClause(questionId, undefined, vesselId, startDate, endDate),
  });

  const counts = await Promise.all(
    ratings.map((ratingId) =>
      prisma.response.count({
        where: whereClause(questionId, ratingId, vesselId, startDate, endDate),
      }),
    ),
  );

  // The first count (totalResponses) is now the accurate total
  const [total, ...ratingCounts] = [totalResponses, ...counts.slice(1)];

  return ratingCounts.map((count, index) => ({
    name: ratingNames[index],
    value: calculatePercentage(count, total),
  }));
};
