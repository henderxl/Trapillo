/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#F5E6D3',
        'soft-rose': '#FFE4E6',
        'dusty-pink': '#FFC0CB',
        'sage': '#9CAF88',
        'terra': '#E2725B',
        'honey': '#F4B860',
        'ocean': '#79A3B1',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};