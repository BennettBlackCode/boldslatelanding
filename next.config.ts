import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'boldslate.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'ojiytsplzyffdgobssut.supabase.co',
      },
    ],
    // Use unoptimized images for Cloudflare Pages (no server-side optimization)
    unoptimized: true,
  },
};

export default nextConfig;
