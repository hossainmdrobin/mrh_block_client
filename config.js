export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") return process.env.BASE_URL;
  return process.env.BASE_URL_PROD;
};
