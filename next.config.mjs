import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly force webpack and silence the Turbopack warning
  webpack: (config) => {
    return config;
  },
  // Ensure we don't use the experimental turbopack engine
  experimental: {
    // Some versions of Next.js 15 might need this empty to avoid the warning
    turbopack: {},
  }
};

export default withPWA(nextConfig);
