import { getDataset } from '@/server';

type Question = {
  id: number;
  title: string;
};

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
