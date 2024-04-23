/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        vazirBold: ['vazirBold', 'sans-serif'],
        vazirMedium: ['vazirMedium', 'sans-serif'],
        BKoodak: ['BKoodak', 'sans-serif'],
      },
    },

    container: {
      screens: {
        700: '1100px',
      },
      center: true,
      padding: '15px',
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
};
