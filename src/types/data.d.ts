import {
  Rating,
  CruiseDataCategory,
  ResponderDataCategory,
  SatisfactionGaugeCategory,
} from '~/types/enums';

interface Ratings {
  rating: Rating;
  value: number;
}

interface DataSet {
  name: string;
  value: number;
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
