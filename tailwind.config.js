/** @type {import('tailwind css').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#0677FF',
        'grey-facebook': '#F0F2F3',
        'green-facebook': '#00A434',
      },
      spacing: {
        '580': '580px',
        '300': '300px',
      }
    },
  },
  plugins: [],
}

