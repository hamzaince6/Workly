/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@workly/shared-ui', '@workly/shared-utils', '@workly/shared-types'],
};

module.exports = nextConfig;

