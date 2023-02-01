/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
