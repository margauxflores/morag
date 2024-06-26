import {
  Rating,
  CruiseDataCategory,
  ResponderDataCategory,
  SatisfactionGaugeCategory,
} from '~/types/enums';

export type BarChartData = {
  title: string;
  dataset: DataSet[];
};

interface DataSet {
  name: string;
  value: string;
}

export type FilterOptions = {
  questionId: number;
  vesselId?: number;
  startDate?: string;
  endDate?: string;
};
