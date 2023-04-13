const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

const env = {
  isDev: isDev,
  isProd: isProd,
  apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
  rootUrl: process.env.ROOT_URL,
};

export default env;
