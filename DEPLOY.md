# Guía de Despliegue

Este proyecto se configura **automáticamente** según el entorno.

## 🚀 Uso

### Desarrollo local
```bash
npm run dev
```
Todo funciona automáticamente en `http://localhost:3000`

### Build para producción local
```bash
npm run build
npm start
```

### GitHub Pages
Simplemente haz push a la rama `main`:
```bash
git push origin main
```
El workflow de GitHub Actions se encarga automáticamente del despliegue.

## 🔧 Cómo funciona

El archivo `next.config.js` detecta automáticamente el entorno:

- **Local** (`npm run dev` o `npm run build`):
  - Sin `basePath` ni `assetPrefix`
  - Imágenes optimizadas
  - Headers de seguridad habilitados
  - API routes habilitados
  - Servidor Next.js completo

- **GitHub Actions** (detecta `GITHUB_ACTIONS=true`):
  - `basePath: '/portafolio-justo'`
  - `assetPrefix: '/portafolio-justo'`
  - Exportación estática (`output: 'export'`)
  - Imágenes sin optimizar
  - Sin API routes

## 📝 Notas

- **No necesitas cambiar nada manualmente**
- No necesitas ramas separadas para diferentes configuraciones
- El archivo `next.config.github.js` ya no es necesario (puedes eliminarlo)
- Los scripts `build:local` y `build:github` están disponibles si necesitas forzar un modo específico
