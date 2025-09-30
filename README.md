# 🚀 Portafolio de Justo García Ferrández

Portafolio profesional desarrollado con Next.js, TypeScript, TailwindCSS y Framer Motion. Diseño elegante con paleta moka profesional, optimizado para SEO y rendimiento.

## ✨ Características

- 🎨 **Diseño Profesional**: Paleta moka elegante con animaciones suaves
- 📱 **Responsive**: Mobile-first design optimizado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Optimizado para Core Web Vitals y Lighthouse
- 🔍 **SEO Optimizado**: Meta tags, JSON-LD, sitemap y robots.txt
- 📊 **Analytics**: Integración con Google Analytics 4
- 📧 **Formulario de Contacto**: Backend funcional con validación y anti-spam
- 🎭 **Animaciones**: Framer Motion con efectos profesionales
- ♿ **Accesible**: WCAG AA compliance
- 🚀 **CI/CD**: GitHub Actions para deploy automático

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS con sistema de diseño personalizado
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod validation
- **Email**: Nodemailer (SMTP/SendGrid/Mailgun)
- **Analytics**: Google Analytics 4
- **Testing**: Jest + React Testing Library
- **E2E**: Playwright
- **Linting**: ESLint + Prettier
- **Deploy**: Vercel/Netlify con GitHub Actions

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/portafolio-justo.git
   cd portafolio-justo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus valores:
   ```env
   # Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   
   # Contact Form
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=tu-email@gmail.com
   SMTP_PASS=tu-app-password
   CONTACT_EMAIL_TO=justo.garcia.2004@gmail.com
   
   # Security
   HCAPTCHA_SITE_KEY=tu-hcaptcha-site-key
   HCAPTCHA_SECRET_KEY=tu-hcaptcha-secret-key
   
   # Environment
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📧 Configuración del Formulario de Contacto

### Opción 1: SMTP (Gmail)

1. Habilita la autenticación de 2 factores en Gmail
2. Genera una contraseña de aplicación
3. Configura las variables:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=tu-email@gmail.com
   SMTP_PASS=tu-app-password
   ```

### Opción 2: SendGrid

1. Crea una cuenta en SendGrid
2. Genera una API Key
3. Configura las variables:
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxx
   SENDGRID_FROM_EMAIL=noreply@tudominio.com
   ```

### Opción 3: Mailgun

1. Crea una cuenta en Mailgun
2. Configura tu dominio
3. Configura las variables:
   ```env
   MAILGUN_API_KEY=key-xxxxxxxxxx
   MAILGUN_DOMAIN=mg.tudominio.com
   ```

## 📊 Configuración de Analytics

1. Crea una propiedad en Google Analytics 4
2. Obtén tu Measurement ID
3. Configura la variable:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

## 🔒 Configuración de Seguridad (hCaptcha)

1. Crea una cuenta en hCaptcha
2. Obtén tus claves
3. Configura las variables:
   ```env
   HCAPTCHA_SITE_KEY=tu-site-key
   HCAPTCHA_SECRET_KEY=tu-secret-key
   ```

## 🌐 Ramas de Despliegue

Este repositorio tiene **4 ramas idénticas** para diferentes servicios de hosting:

### 📋 Estructura de Ramas

- **`main`** 🏠 - Rama principal con el código base completo
- **`netlify`** 🟢 - Rama específica para despliegue en Netlify
- **`vercel`** ⚡ - Rama específica para despliegue en Vercel  
- **`github-pages`** 📄 - Rama específica para GitHub Pages

### 🔄 Sincronización de Ramas

Todas las ramas están **exactamente iguales** y contienen:
- ✅ Logo café + código rediseñado
- ✅ Header completamente responsivo
- ✅ Stats limpias sin círculos amarillos
- ✅ Overflow horizontal eliminado
- ✅ Menú móvil funcional
- ✅ Pantalla de carga épica

### 🚀 Comandos para Cambiar de Rama

```bash
# Cambiar a rama específica para desplegar
git checkout main          # Rama principal
git checkout netlify       # Para Netlify
git checkout vercel        # Para Vercel
git checkout github-pages  # Para GitHub Pages

# Ver todas las ramas disponibles
git branch -a
```

## 🚀 Deploy

### Deploy en Vercel

1. **Conecta tu repositorio**
   - Ve a [Vercel](https://vercel.com)
   - Importa tu repositorio de GitHub

2. **Configura variables de entorno**
   - Añade todas las variables de `.env.example`
   - Configura `NEXT_PUBLIC_SITE_URL` con tu dominio

3. **Deploy automático**
   - Cada push a `main` desplegará automáticamente

### Deploy en Netlify

1. **Conecta tu repositorio**
   - Ve a [Netlify](https://netlify.com)
   - Conecta tu repositorio de GitHub

2. **Configura build settings**
   ```
   Build command: npm run build && npm run export
   Publish directory: out
   ```

3. **Configura variables de entorno**
   - Añade todas las variables necesarias

### GitHub Actions

El proyecto incluye workflows de CI/CD que:

- ✅ Ejecutan tests y linting
- 🔍 Analizan con Lighthouse
- 🚀 Despliegan automáticamente
- 📊 Reportan métricas de rendimiento

**Secrets necesarios:**
```
GA_MEASUREMENT_ID
SITE_URL
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
NETLIFY_AUTH_TOKEN
NETLIFY_SITE_ID
LHCI_GITHUB_APP_TOKEN
```

## 🧪 Testing

```bash
# Unit tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage

# E2E tests
npm run e2e

# E2E UI mode
npm run e2e:ui
```

## 📈 Análisis de Rendimiento

```bash
# Lighthouse CI
npm run lighthouse

# Bundle analyzer
npm run analyze
```

## 🎨 Personalización

### Colores

Edita `tailwind.config.js` para personalizar la paleta:

```js
colors: {
  moka: {
    50: '#F8F4EF',   // Crema claro
    500: '#4B3621',  // Marrón moka principal
    // ... más colores
  }
}
```

### Contenido

Edita `src/data/content.json` para actualizar:
- Información personal
- Experiencia profesional
- Proyectos
- Habilidades
- Testimonios

### Componentes

Los componentes están organizados en:
- `src/components/layout/` - Header, Footer
- `src/components/sections/` - Secciones de la página
- `src/components/ui/` - Componentes reutilizables

## 📱 Responsive Design

El diseño es mobile-first con breakpoints:
- `xs`: 475px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accesibilidad

- Navegación por teclado completa
- Contraste WCAG AA
- Semantic HTML
- ARIA labels
- Screen reader friendly
- Focus management

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run start        # Servidor producción
npm run lint         # Linting
npm run lint:fix     # Fix linting
npm run type-check   # Verificar tipos
npm test             # Tests unitarios
npm run e2e          # Tests E2E
npm run lighthouse   # Análisis Lighthouse
npm run analyze      # Análisis de bundle
```

## 📁 Estructura del Proyecto

```
portafolio-justo/
├── .github/workflows/    # GitHub Actions
├── public/              # Assets estáticos
├── src/
│   ├── app/            # App Router (Next.js 13+)
│   ├── components/     # Componentes React
│   ├── data/          # Datos del contenido
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilidades
│   └── types/         # Tipos TypeScript
├── .env.example       # Variables de entorno
├── tailwind.config.js # Configuración Tailwind
└── next.config.js     # Configuración Next.js
```

## 🐛 Solución de Problemas

### Error de build

```bash
# Limpiar cache
rm -rf .next node_modules
npm install
npm run build
```

### Problemas de email

1. Verifica las credenciales SMTP
2. Revisa los logs del servidor
3. Comprueba la configuración del firewall

### Problemas de Analytics

1. Verifica el Measurement ID
2. Comprueba que esté en producción
3. Revisa la consola del navegador

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Justo García Ferrández**
- Email: justo.garcia.2004@gmail.com
- GitHub: [@Jusdorado](https://github.com/Jusdorado)
- LinkedIn: [Justo García Ferrández](https://linkedin.com/in/justo-garcia-ferrandez)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## ⭐ Agradecimientos

- Diseño inspirado en portfolios modernos de Awwwards
- Paleta de colores moka profesional
- Animaciones suaves con Framer Motion
- Optimizaciones de rendimiento siguiendo las mejores prácticas

---

¿Te gusta este proyecto? ¡Dale una ⭐ en GitHub!
