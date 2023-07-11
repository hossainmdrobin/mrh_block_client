/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','res.cloudinary.com','mrh-blog-server.vercel.app'],
  }
}

module.exports = nextConfig
