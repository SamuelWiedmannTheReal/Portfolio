/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: falls du das Repo in einem Unterordner hostest (z.B. /mein-repo)
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};

module.exports = nextConfig;