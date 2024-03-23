export const calculatePercentage = (value: number, total: number) => {
  // if (total === 0) {
  //   return 'Total cannot be zero.';
  // }
  return ((value / total) * 100).toFixed(2);
};
