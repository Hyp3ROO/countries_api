/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(0, 0%, 98%)',
      lightInput: 'hsl(0, 0%, 52%)',
      lightText: 'hsl(200, 15%, 8%)',
      darkPrimary: 'hsl(209, 23%, 22%)',
      darkSecondary: 'hsl(207, 26%, 17%)',
      transparent: 'transparent',
    },
  },
  darkMode: 'class',
  plugins: [],
}
