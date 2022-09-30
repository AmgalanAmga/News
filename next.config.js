/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.discordapp.com","img.dummyapi.io", "gifdb.com"],
  },
};

module.exports = nextConfig;
