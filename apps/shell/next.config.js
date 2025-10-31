/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Landing page için
      {
        source: '/',
        destination: process.env.LANDING_URL || 'http://localhost:3000',
      },
    ];
  },
  // Micro-frontend'ler için CORS
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
