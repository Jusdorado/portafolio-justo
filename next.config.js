/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  basePath: '/portafolio-justo',
  assetPrefix: '/portafolio-justo',
  eslint: {
    ignoreDuringBuilds: true, // Desactivar ESLint durante build para GitHub Pages
  },
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  // Headers comentados para GitHub Pages (exportación estática)
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin',
  //         },
  //         {
  //           key: 'Permissions-Policy',
  //           value: 'camera=(), microphone=(), geolocation=()',
  //         },
  //       ],
  //     },
  //   ];
  // },
  // Comentado para GitHub Pages (no soporta API routes)
  // async rewrites() {
  //   return [
  //     {
  //       source: '/sitemap.xml',
  //       destination: '/api/sitemap',
  //     },
  //     {
  //       source: '/robots.txt',
  //       destination: '/api/robots',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
