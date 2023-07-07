/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','mrh-blog-server.vercel.app'],
  }
}

module.exports = nextConfig
