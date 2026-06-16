import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase timeout for static generation (PDF and Charts can be heavy)
  staticPageGenerationTimeout: 1000,
  // Disable production source maps to save memory
  productionBrowserSourceMaps: false,
  // Explicitly force webpack and silence the Turbopack warning
  webpack: (config) => {
    return config;
  },
  // Ensure we don't use the experimental turbopack engine
  experimental: {
    turbopack: {},
  }
};

export default withPWA(nextConfig);
