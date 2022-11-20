/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  distDir: 'dist',
  experimental: {
    transpilePackages: ['@fizzog/ui', '@fizzog/sx']
  }
};

module.exports = nextConfig;
