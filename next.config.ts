import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bosch.com.vn',
      },
      {
        protocol: 'https',
        hostname: '*.bosch.com.vn',
      },
      {
        protocol: 'https',
        hostname: '*.bosch.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.bosch.com',
      },
    ],
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
