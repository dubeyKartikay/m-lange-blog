/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },{
        protocol: 'https',
        hostname: 'i.imgur.com'
      }
    ],
  },
}

module.exports = nextConfig
