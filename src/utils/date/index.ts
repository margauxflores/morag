export const formatDateToSQLFormat = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export const getQuarterDateRange = (
  year: number,
  quarter: Quarter,
): { startDate: string; endDate: string } => {
  let startDate: Date;
  let endDate: Date;

  switch (quarter) {
    case 'Q1':
      startDate = new Date(year, 0, 1); // January 1st
      endDate = new Date(year, 2, 31); // March 31st
      break;
    case 'Q2':
      startDate = new Date(year, 3, 1); // April 1st
      endDate = new Date(year, 5, 30); // June 30th
      break;
    case 'Q3':
      startDate = new Date(year, 6, 1); // July 1st
      endDate = new Date(year, 8, 30); // September 30th
      break;
    case 'Q4':
      startDate = new Date(year, 9, 1); // October 1st
      endDate = new Date(year, 11, 31); // December 31st
      break;
    default:
      // This ensures that only values of type 'Quarter' are accepted, and helps with exhaustiveness checking
      const _exhaustiveCheck: never = quarter;
      throw new Error(`Invalid quarter: ${quarter}`);
  }

  return {
    startDate: startDate.toISOString().substring(0, 10),
    endDate: endDate.toISOString().substring(0, 10),
  };
};
