/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  // TypeScript configuration to ignore build errors
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  redirects: async () => {
    return []
  },
}

export default nextConfig
