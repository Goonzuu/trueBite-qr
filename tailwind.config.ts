import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores trueBite
        primary: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f48484',
          500: '#B6462C', // Color principal - rojo terroso
          600: '#a03d26',
          700: '#8a3420',
          800: '#742b1a',
          900: '#5e2214',
          950: '#48190e',
        },
        secondary: {
          50: '#fffbf0',
          100: '#fff6d9',
          200: '#ffedb3',
          300: '#FFD28F', // Color secundario - mostaza suave
          400: '#ffc266',
          500: '#ffb033',
          600: '#ff9a00',
          700: '#cc7a00',
          800: '#995c00',
          900: '#663d00',
          950: '#331f00',
        },
        background: {
          DEFAULT: '#FAF6F1', // Fondo base - blanco cálido
          50: '#fefefe',
          100: '#fdfcfb',
          200: '#faf8f4',
          300: '#f6f2ec',
          400: '#f2ede4',
          500: '#ede7dc',
          600: '#e8e1d4',
          700: '#e3dbcc',
          800: '#ded5c4',
          900: '#d9cfbc',
        },
        text: {
          DEFAULT: '#1C1C1C', // Texto principal - negro suave
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1C1C1C',
        },
        accent: {
          50: '#f5f3f2',
          100: '#e7e0dd',
          200: '#d0c2bc',
          300: '#b39f96',
          400: '#967a6f',
          500: '#4E342E', // Acentos - marrón profundo
          600: '#452d28',
          700: '#3c2622',
          800: '#331f1c',
          900: '#2a1816',
          950: '#211110',
        },
        // Colores semánticos para ratings
        taste: {
          DEFAULT: '#B6462C', // Sabor - rojo terroso
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f48484',
          500: '#B6462C',
          600: '#a03d26',
          700: '#8a3420',
          800: '#742b1a',
          900: '#5e2214',
        },
        quality: {
          DEFAULT: '#FFD28F', // Calidad - mostaza suave
          50: '#fffbf0',
          100: '#fff6d9',
          200: '#ffedb3',
          300: '#FFD28F',
          400: '#ffc266',
          500: '#ffb033',
          600: '#ff9a00',
          700: '#cc7a00',
          800: '#995c00',
          900: '#663d00',
        },
        value: {
          DEFAULT: '#4E342E', // Precio-Calidad - marrón profundo
          50: '#f5f3f2',
          100: '#e7e0dd',
          200: '#d0c2bc',
          300: '#b39f96',
          400: '#967a6f',
          500: '#4E342E',
          600: '#452d28',
          700: '#3c2622',
          800: '#331f1c',
          900: '#2a1816',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config
