/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['platform-lookaside.fbsbx.com', 'lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
    quality: 100, // Adjust the quality as needed
  },
}

module.exports = {
  ...nextConfig, // Include the Next.js configuration
  output: 'standalone', // Your additional configuration
};

