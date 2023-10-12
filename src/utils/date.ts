export const formatDate = (dateString: string) => {
  const dateObj = new Date(dateString);

  return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`;
};
