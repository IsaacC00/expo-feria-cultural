import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/expo-feria-cultural',
  output: 'export',
  reactCompiler: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
