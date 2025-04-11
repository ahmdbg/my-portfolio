/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Matikan error dari ESLint saat build
  },
  typescript: {
    ignoreBuildErrors: true, // Abaikan error dari TypeScript saat build
  },
};

export default nextConfig;
