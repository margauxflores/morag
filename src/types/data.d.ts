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

interface Ratings {
  rating: Rating;
  value: number;
}

interface DataSet {
  name: string;
  value: string;
}

interface CategoryRating<T> {
  category: T;
  ratings: Ratings[];
}

interface CruiseData {
  category: CruiseDataCategory;
  value: number;
}

interface ResponderData {
  category: ResponderDataCategory;
  dataSet: DataSet[];
}

interface SatisfactionGaugeData {
  category: SatisfactionGaugeCategory;
  value: number;
}

interface SurveyData {
  cruiseData: CruiseData[];
  responderData: ResponderData[];
  satisfactionGaugeData: SatisfactionGaugeData[];
}
