export const whereClause = (
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
    ...(ratingId && { rating_id: ratingId }), // Only add rating_id to the conditions if it's not null
    ...(Object.keys(cruiseConditions).length > 0 && {
      cruise: cruiseConditions,
    }),
  };
};
