/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  devIndicators: {
    buildActivity: false, // removes the "N" icon
  },
};

export default nextConfig;