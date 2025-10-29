/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@workly/shared-ui',
    '@workly/shared-utils',
    '@workly/shared-types',
    '@workly/event-bus',
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = 'auto';
    }
    return config;
  },
};

module.exports = nextConfig;

