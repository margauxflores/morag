export const getQueryParameters = (url: string): Record<string, string> => {
  const result: Record<string, string> = {};
  const urlSearchParams = new URLSearchParams(new URL(url).search);

  Array.from(urlSearchParams.entries()).forEach(([key, value]) => {
    result[key] = value;
  });

  return result;
};
