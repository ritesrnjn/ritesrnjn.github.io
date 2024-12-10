import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    unoptimized: true
  },
  output: "export"
};

export default nextConfig;
