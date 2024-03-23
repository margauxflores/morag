import { getDataset } from '@/server';
import { getQuarterDateRange, Quarter } from '@/utils';

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
}

export async function prepareAndGenerateResponse({
  title,
  questions,
  vessel,
  fiscalYear,
  quarter,
}: GenerateResponseParams): Promise<any> {
  // Adjust the return type according to what generateResponse returns
  let dateRange = null;
  if (fiscalYear && quarter) {
    dateRange = getQuarterDateRange(fiscalYear, quarter);
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
