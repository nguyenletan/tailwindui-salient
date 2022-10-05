/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  runtime: 'experimental-edge',
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig
