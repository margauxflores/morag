import { getDataset } from '@/server';
import { getQuarterDateRange, getYearStartAndEndDates, Quarter } from '@/utils';

type Question = {
  id: number;
  title: string;
};

interface GenerateResponseParams {
  title: string;
  questions: Array<{ id: number; title: string }>;
  vessel?: number;
  fiscalYear?: number;
  quarter?: Quarter;
  startDate?: string;
  endDate?: string;
}

export async function prepareAndGenerateResponse({
  title,
  questions,
  vessel,
  fiscalYear,
  quarter,
  startDate,
  endDate,
}: GenerateResponseParams): Promise<any> {
  // Adjust the return type according to what generateResponse returns
  let dateRange: { startDate: string; endDate: string } | null = null;

  // Use custom date range if provided
  if (startDate && endDate) {
    dateRange = { startDate, endDate };
  } else if (fiscalYear) {
    const { startDate: yearStartDate, endDate: yearEndDate } =
      getYearStartAndEndDates(fiscalYear);
    dateRange = {
      startDate: yearStartDate.toISOString(),
      endDate: yearEndDate.toISOString(),
    };

    if (quarter) {
      const { startDate: quarterStartDate, endDate: quarterEndDate } =
        getQuarterDateRange(fiscalYear, quarter);
      dateRange = {
        startDate: quarterStartDate.toString(),
        endDate: quarterEndDate.toString(),
      };
    }
  }

  // Directly pass vessel as vesselId, and conditionally pass startDate and endDate
  return await generateResponse(
    title,
    questions,
    vessel,
    dateRange?.startDate,
    dateRange?.endDate,
  );
}

export const generateResponse = async (
  title: string,
  questions: Question[],
  vesselId?: number,
  startDate?: string,
  endDate?: string,
) => {
  const datasetPromises = questions.map((question) =>
    getDataset({ questionId: question.id, vesselId, startDate, endDate }),
  );

  const datasets = await Promise.all(datasetPromises);

  return {
    title: title,
    data: datasets.map((dataset, index) => ({
      title: questions[index].title,
      dataset,
    })),
  };
};
