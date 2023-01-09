/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: 'hsl(209, 23%, 22%)',
      secondary: 'hsl(207, 26%, 17%)',
      transparent: 'transparent',
    },
  },
  plugins: [],
}
