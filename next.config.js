/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kiwitech.com',
      },
    ],
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
  }
