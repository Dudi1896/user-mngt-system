/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = {
  //add other configs here too
  env: {
    url: process.env.url,
  },
}