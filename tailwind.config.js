/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0f1117',
          800: '#1A1D24',
          700: '#2A2E38',
          600: '#404040',
          500: '#6b7280',
          400: '#b0bec5',
          300: '#d1d5db',
          200: '#e5e7eb',
          100: '#f3f4f6',
        },
        blue: {
          400: '#00C8FF',
          500: '#00AEEF',
          600: '#0044ff',
        },
        cyan: {
          400: '#00ffcc',
          500: '#00d4a4',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px #00C8FF' },
          'to': { boxShadow: '0 0 30px #00ffcc' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};