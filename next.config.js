const withOffline = require("next-offline");
require("dotenv").config();

const nextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/donate": { page: "/donate" },
      "/conference": { page: "/conference" },
      "/contact": { page: "/contact" },
    };
  },
};

module.exports = withOffline(nextConfig);
