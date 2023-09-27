export const calculatePercentage = (value: number, total: number) => {
  if (typeof value !== 'number' || typeof total !== 'number') {
    return 'Both value and total must be numbers.';
  }

  if (total === 0) {
    return 'Total cannot be zero.';
  }

  const percentage = (value / total) * 100;
  return percentage;
};
