import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Clerk middleware may show Edge Runtime warning (MessageEvent) from @clerk/shared; safe to ignore per Clerk docs
  images: {
    domains: [], // Allow images from any domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow images from any hostname
        port: '',
        pathname: '/**', // Allow any path
      },
    ],
  },
};

export default nextConfig;
