/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async redirects() {
    return [
      {
        source: "/ds",
        destination: "/designsystem",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
