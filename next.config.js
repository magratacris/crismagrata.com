/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Define the absolute URL to your JSON file
    PROJECTS_DATA_URL: "/data/projects.json",
  },
};

module.exports = nextConfig;
