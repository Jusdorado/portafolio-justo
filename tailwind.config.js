/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Moka Profesional basada en la memoria
        moka: {
          50: '#F8F4EF',   // Crema claro
          100: '#E6D5C3',  // Beige suave
          200: '#D4C4A8',  // Beige medio
          300: '#C9A66B',  // Dorado suave
          400: '#B87333',  // Cobre intenso
          500: '#4B3621',  // Marrón moka principal
          600: '#3C2F2F',  // Marrón cacao
          700: '#2B2B2B',  // Gris antracita
          800: '#1F1F1F',  // Negro suave
          900: '#0F0F0F',  // Negro profundo
        },
        gold: {
          400: '#D4AF37',  // Gold clásico
          500: '#C9A66B',  // Dorado suave
          600: '#B87333',  // Cobre intenso
        },
        accent: {
          olive: '#708D81', // Verde oliva
          sand: '#B0A999',  // Gris arena
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(201, 166, 107, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(201, 166, 107, 0.8)' },
        },
      },
      backgroundImage: {
        'gradient-moka': 'linear-gradient(135deg, #4B3621 0%, #3C2F2F 100%)',
        'gradient-warm': 'linear-gradient(135deg, #E6D5C3 0%, #F8F4EF 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #C9A66B 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'moka': '0 4px 6px -1px rgba(75, 54, 33, 0.1), 0 2px 4px -1px rgba(75, 54, 33, 0.06)',
        'moka-lg': '0 10px 15px -3px rgba(75, 54, 33, 0.1), 0 4px 6px -2px rgba(75, 54, 33, 0.05)',
        'gold': '0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -1px rgba(212, 175, 55, 0.06)',
        'gold-lg': '0 10px 15px -3px rgba(212, 175, 55, 0.1), 0 4px 6px -2px rgba(212, 175, 55, 0.05)',
        'inner-moka': 'inset 0 2px 4px 0 rgba(75, 54, 33, 0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-moka': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#E6D5C3',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#4B3621',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#3C2F2F',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
