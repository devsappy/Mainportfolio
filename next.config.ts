import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Force rebuild on Vercel
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Configure webpack for better hot reload and GLB files
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Ensure hot reload works properly
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: /node_modules/,
      };
    }

    // Add GLB file support
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });

    return config;
  },
  // Experimental features for better DX
  experimental: {
    // Enable Turbopack for faster builds (optional)
    // turbo: true,
  },
};

export default nextConfig;
