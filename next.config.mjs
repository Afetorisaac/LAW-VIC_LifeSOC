import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase timeout for static generation
  staticPageGenerationTimeout: 1000,
  // Disable production source maps to save memory
  productionBrowserSourceMaps: false,
  // Explicitly force webpack
  webpack: (config) => {
    return config;
  },
  // Ensure we don't use the experimental turbopack engine
  experimental: {
    turbopack: {},
    // Limit concurrency to avoid crashing Vercel's small build machines
    cpus: 1,
    workerThreads: false,
  }
};

export default withPWA(nextConfig);
