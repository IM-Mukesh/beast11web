/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
      },
      // Add more trusted domains here if needed
    ],
  },
};

module.exports = nextConfig;
