/** @type {import('next').NextConfig} */

// Detectar automáticamente el entorno
// GitHub Actions establece CI=true y GITHUB_ACTIONS=true
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.DEPLOY_TARGET === 'github';
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  // Configuración condicional según el entorno
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,
  skipTrailingSlashRedirect: isGitHubPages,
  distDir: 'out',
  basePath: isGitHubPages ? '/portafolio-justo' : '',
  assetPrefix: isGitHubPages ? '/portafolio-justo' : '',
  eslint: {
    ignoreDuringBuilds: isGitHubPages,
  },
  images: {
    unoptimized: isGitHubPages, // Solo para exportación estática
  },
  // Headers solo para desarrollo local
  ...(!isGitHubPages && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()',
            },
          ],
        },
      ];
    },
  }),
  // Rewrites solo para desarrollo local (API routes)
  ...(!isGitHubPages && {
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
        {
          source: '/robots.txt',
          destination: '/api/robots',
        },
      ];
    },
  }),
};

module.exports = nextConfig;
