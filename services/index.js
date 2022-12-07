// Base URL for the API
const baseUrl = process.env.baseURL;

// Config for the API
const config = () => {
  return {
    headers: {
      Authorization: process.env.customKey,
    },
  };
};

export { config, baseUrl };
