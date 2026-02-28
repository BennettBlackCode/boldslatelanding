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
        hostname: 'ojiytsplzyffdgobssut.supabase.co',
      },
    ],
    // Use unoptimized images for Cloudflare Pages (no server-side optimization)
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/catalogue',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-5-agency-automations',
        destination: '/',
        permanent: true,
      },
      {
        source: '/playbook/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/7fa-test1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/7fa-test2',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
