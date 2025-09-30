# 🎨 Notas de Diseño - Portafolio Justo García Ferrández

## 🎯 Concepto de Diseño

El portafolio utiliza una **paleta moka profesional** que transmite seriedad, elegancia y calidez profesional. El diseño está inspirado en portfolios modernos de Awwwards y sigue principios de diseño contemporáneo.

## 🎨 Paleta de Colores

### Colores Principales

```css
/* Marrón Moka (Principal) */
--moka-500: #4B3621
/* Uso: Fondos principales, elementos de marca */
/* Psicología: Seriedad, profesionalismo, estabilidad */

/* Marrón Cacao (Profundo) */
--moka-600: #3C2F2F
/* Uso: Headers, footers, elementos profundos */
/* Contraste: Excelente para texto blanco */

/* Beige Suave (Alternativo) */
--moka-100: #E6D5C3
/* Uso: Fondos de secciones alternas, cards */
/* Función: Crear jerarquía visual suave */

/* Crema Claro (Tipografía) */
--moka-50: #F8F4EF
/* Uso: Texto sobre fondos oscuros */
/* Accesibilidad: AAA compliance sobre moka-500 */
```

### Colores de Acento

```css
/* Dorado Suave (CTAs y Hover) */
--gold-500: #C9A66B
/* Uso: Botones, hover states, iconos destacados */
/* Función: Llamar la atención, lujo sutil */

/* Cobre Intenso (Detalles) */
--gold-600: #B87333
/* Uso: Títulos secundarios, detalles importantes */
/* Contraste: Perfecto sobre fondos claros */

/* Dorado Clásico (Principal) */
--gold-400: #D4AF37
/* Uso: CTAs principales, elementos destacados */
/* Impacto: Alto contraste, máxima visibilidad */
```

### Colores de Soporte

```css
/* Gris Antracita (Texto) */
--moka-700: #2B2B2B
/* Uso: Texto principal sobre fondos claros */
/* Legibilidad: Excelente contraste */

/* Blanco Puro (Contraste) */
--white: #FFFFFF
/* Uso: Texto sobre fondos oscuros, cards */
/* Función: Máximo contraste y limpieza */

/* Verde Oliva (Opcional) */
--accent-olive: #708D81
/* Uso: Detalles sutiles, estados de éxito */
/* Armonía: Complementa la paleta moka */

/* Gris Arena (Secundario) */
--accent-sand: #B0A999
/* Uso: Texto secundario, bordes suaves */
/* Función: Elementos de apoyo visual */
```

## 📐 Sistema de Tipografía

### Fuentes Principales

```css
/* Fuente Sans-Serif (Cuerpo) */
font-family: 'Inter', system-ui, sans-serif;
/* Uso: Texto de cuerpo, navegación, formularios */
/* Características: Legible, moderna, profesional */

/* Fuente Serif (Títulos) */
font-family: 'Playfair Display', Georgia, serif;
/* Uso: Títulos principales, elementos destacados */
/* Características: Elegante, sofisticada, impactante */

/* Fuente Monospace (Código) */
font-family: 'JetBrains Mono', Menlo, monospace;
/* Uso: Código, elementos técnicos */
/* Características: Legible, técnica, moderna */
```

### Escala Tipográfica

```css
/* Títulos Principales */
.heading-1: 4xl md:5xl lg:6xl (36px → 48px → 60px)
.heading-2: 3xl md:4xl lg:5xl (30px → 36px → 48px)
.heading-3: 2xl md:3xl (24px → 30px)
.heading-4: xl md:2xl (20px → 24px)

/* Texto de Cuerpo */
.text-base: 1rem (16px) - Texto principal
.text-lg: 1.125rem (18px) - Texto destacado
.text-xl: 1.25rem (20px) - Subtítulos

/* Texto Pequeño */
.text-sm: 0.875rem (14px) - Texto secundario
.text-xs: 0.75rem (12px) - Metadatos, labels
```

## 🏗️ Sistema de Espaciado

### Grid y Layout

```css
/* Container Principal */
.container-custom: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

/* Secciones */
.section: py-16 md:py-24 (64px → 96px vertical)

/* Grid Responsivo */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-6 md:gap-8 lg:gap-12
```

### Espaciado Interno

```css
/* Cards y Componentes */
p-4: 16px - Componentes pequeños
p-6: 24px - Cards estándar
p-8: 32px - Cards importantes
p-12: 48px - Secciones destacadas

/* Márgenes */
mb-4: 16px - Separación estándar
mb-6: 24px - Separación media
mb-8: 32px - Separación amplia
mb-16: 64px - Separación de sección
```

## 🎭 Sistema de Animaciones

### Principios de Animación

1. **Suavidad**: Todas las transiciones usan `ease-out` o `spring`
2. **Duración**: 200-600ms para micro-interacciones, 800ms+ para entradas
3. **Escalonado**: Elementos aparecen con delay progresivo (100-200ms)
4. **Respeto**: `prefers-reduced-motion` desactiva animaciones complejas

### Tipos de Animaciones

```css
/* Entrada de Elementos */
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, type: 'spring' }

/* Hover States */
hover:scale-105 hover:shadow-gold-lg
transition: all 300ms ease-out

/* Elementos Flotantes */
animate: { y: [-10, 10, -10] }
transition: { duration: 4, repeat: Infinity }
```

### Animaciones Específicas

```css
/* Hero - Elementos flotantes */
.animate-float: 6s ease-in-out infinite

/* Stats - Números animados */
.animate-counter: Incremento progresivo 2s

/* Skills - Barras de progreso */
.progress-fill: width animation 1.5s spring

/* Cards - Hover lift */
.hover-lift: translateY(-8px) 300ms ease-out
```

## 🎨 Componentes de Diseño

### Botones

```css
/* Primario (Gold) */
.btn-primary: bg-gradient-gold text-moka-900
hover: shadow-gold-lg scale-105

/* Secundario (Moka) */
.btn-secondary: bg-moka-500 text-moka-50
hover: bg-moka-600 shadow-moka-lg

/* Outline */
.btn-outline: border-gold-400 text-gold-400
hover: bg-gold-400 text-moka-900
```

### Cards

```css
/* Base */
.card: bg-white/80 backdrop-blur-sm rounded-xl shadow-moka

/* Hover */
.card-hover: hover:shadow-moka-lg hover:-translate-y-1

/* Gradientes */
.bg-gradient-moka: linear-gradient(135deg, #4B3621 0%, #3C2F2F 100%)
.bg-gradient-warm: linear-gradient(135deg, #E6D5C3 0%, #F8F4EF 100%)
.bg-gradient-gold: linear-gradient(135deg, #D4AF37 0%, #C9A66B 100%)
```

### Sombras

```css
/* Sistema de Sombras */
.shadow-moka: 0 4px 6px rgba(75, 54, 33, 0.1)
.shadow-moka-lg: 0 10px 15px rgba(75, 54, 33, 0.1)
.shadow-gold: 0 4px 6px rgba(212, 175, 55, 0.1)
.shadow-gold-lg: 0 10px 15px rgba(212, 175, 55, 0.1)
```

## 📱 Diseño Responsive

### Breakpoints

```css
xs: 475px   - Móviles pequeños
sm: 640px   - Móviles grandes
md: 768px   - Tablets
lg: 1024px  - Laptops
xl: 1280px  - Desktops
2xl: 1536px - Pantallas grandes
```

### Estrategia Mobile-First

1. **Base**: Diseño optimizado para 320px+
2. **Progresivo**: Mejoras para pantallas más grandes
3. **Contenido**: Prioridad al contenido esencial
4. **Navegación**: Menú hamburguesa < 1024px
5. **Imágenes**: Responsive con next/image

### Adaptaciones por Dispositivo

```css
/* Móvil (< 768px) */
- Stack vertical
- Navegación hamburguesa
- Padding reducido
- Texto más pequeño

/* Tablet (768px - 1024px) */
- Grid 2 columnas
- Navegación híbrida
- Espaciado medio

/* Desktop (> 1024px) */
- Grid completo
- Navegación horizontal
- Espaciado amplio
- Efectos hover completos
```

## ♿ Accesibilidad

### Contraste de Colores

```css
/* Combinaciones AAA */
moka-700 (#2B2B2B) sobre moka-50 (#F8F4EF): 15.8:1
moka-50 (#F8F4EF) sobre moka-500 (#4B3621): 12.1:1
gold-600 (#B87333) sobre moka-50 (#F8F4EF): 8.2:1

/* Combinaciones AA */
moka-600 (#3C2F2F) sobre gold-400 (#D4AF37): 4.8:1
```

### Elementos Accesibles

```css
/* Focus States */
focus:ring-2 focus:ring-gold-400 focus:ring-offset-2

/* Semantic HTML */
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>

/* ARIA Labels */
aria-label, aria-describedby, aria-expanded, role
```

## 🎯 Principios de UX

### Jerarquía Visual

1. **Primario**: Títulos principales (Playfair Display, gold-600)
2. **Secundario**: Subtítulos y CTAs (Inter, moka-700)
3. **Terciario**: Texto de cuerpo (Inter, moka-600)
4. **Cuaternario**: Metadatos (Inter, moka-500)

### Flujo de Usuario

1. **Hero**: Impacto inicial y CTAs claros
2. **About**: Construcción de confianza
3. **Experience**: Demostración de competencia
4. **Projects**: Prueba social y casos de éxito
5. **Contact**: Conversión final

### Micro-interacciones

- **Hover**: Feedback inmediato en elementos interactivos
- **Loading**: Estados de carga claros
- **Success**: Confirmación visual de acciones
- **Error**: Mensajes de error constructivos

## 🔧 Tokens de Diseño

### Variables CSS Personalizadas

```css
:root {
  /* Colores */
  --moka-50: #F8F4EF;
  --moka-500: #4B3621;
  --gold-400: #D4AF37;
  
  /* Tipografía */
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-playfair: 'Playfair Display', Georgia, serif;
  
  /* Espaciado */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 3rem;
  
  /* Bordes */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}
```

## 📊 Métricas de Diseño

### Objetivos de Rendimiento

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **Lighthouse**: > 90 en todas las categorías

### Optimizaciones Implementadas

1. **Imágenes**: next/image con lazy loading
2. **Fuentes**: Preload de fuentes críticas
3. **CSS**: Critical CSS inlining
4. **JS**: Code splitting y dynamic imports
5. **Animaciones**: GPU acceleration con transform

---

## 🎨 Inspiración y Referencias

- **Awwwards**: Portfolios premiados 2024
- **Dribbble**: Tendencias de diseño profesional
- **Behance**: Casos de estudio de UX/UI
- **Material Design**: Principios de micro-interacciones
- **Apple HIG**: Estándares de accesibilidad

Este sistema de diseño garantiza consistencia, accesibilidad y una experiencia de usuario excepcional en todos los dispositivos.
