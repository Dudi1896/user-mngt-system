// Load environment variables based on the environment (development or production)
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['platform-lookaside.fbsbx.com', 'lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

const loadEnv = () => {
  if (process.env.NODE_ENV === 'production') {
    return require('dotenv').config({ path: './.env' });
  } else {
    return require('dotenv').config({ path: './.env.local' });
  }
};

const env = loadEnv().parsed; // Remove .parsed
console.log(env);
console.log(process.env.NODE_ENV);

module.exports = {
  ...nextConfig,
  output: 'standalone',
};
