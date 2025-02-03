import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.gutenberg.org',
        },
      ],
    },

};

export default nextConfig;
