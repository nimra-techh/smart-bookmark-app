import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(), // ✅ absolute path, warning removed
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['next/font/google'],
  },
}

export default nextConfig

