/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    fontSize: {
      'xxs': ['8px', { lineHeight: '12px' }], // custom 8px font size
      'xxxs': ['2px', { lineHeight: '10px' }], // custom 6px font size
    },
  
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  // tailwind.config.js

      fontFamily: {
        hiragino: ['"Hiragino Sans CNS"', 'sans-serif'],
      
  },

  plugins: [],
}


