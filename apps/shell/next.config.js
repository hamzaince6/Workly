/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@workly/shared-ui',
    '@workly/shared-utils',
    '@workly/shared-types',
    '@workly/event-bus',
  ],
  // Module Federation will be configured here later
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = 'auto';
    }
    return config;
  },
  // Enable experimental features for module federation
  experimental: {
    // Features can be added here as needed
  },
};

module.exports = nextConfig;

