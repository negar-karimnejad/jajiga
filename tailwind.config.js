/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vazirBold: ['vazirBold', 'sans-serif'],
        vazirMedium: ['vazirMedium', 'sans-serif'],
        BKoodak: ['BKoodak', 'sans-serif'],
      },
    },

    container: {
      center: true,
      padding: '12px',
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
};
