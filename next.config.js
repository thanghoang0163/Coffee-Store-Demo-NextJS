/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const images = {
  domains: ["images.unsplash.com"],
};

module.exports = { nextConfig, images };
