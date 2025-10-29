/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@workly/shared-ui',
    '@workly/shared-utils',
    '@workly/shared-types',
    '@workly/event-bus',
  ],
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;

