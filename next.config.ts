import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Configure webpack for better hot reload
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Ensure hot reload works properly
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: /node_modules/,
      };
    }
    return config;
  },
  // Experimental features for better DX
  experimental: {
    // Enable Turbopack for faster builds (optional)
    // turbo: true,
  },
};

export default nextConfig;
