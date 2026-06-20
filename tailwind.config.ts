import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '4xl': '1600px',
      '3xl': '1500px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          50: '#fff9e6',
          100: '#fff0bf',
          200: '#ffe08a',
          300: '#ffd45c',
          400: '#fbbf24',
          500: '#e6a819',
          600: '#b98414',
          700: '#8c6310',
          800: '#63470d',
          900: '#3d2d09',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(251, 191, 36, 0.22)',
      },
      backgroundImage: {
        'glass-panel':
          'linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
