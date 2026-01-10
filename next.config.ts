import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'effydesk.com',
      },
      {
        protocol: 'https',
        hostname: '*.effydesk.com',
      },
    ],
  },
};

export default nextConfig;
