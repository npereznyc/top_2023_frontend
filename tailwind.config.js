/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.jsx', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'lavender': {
          '300': '#CAB9F2',
        },
        'purple': '#A182EB',
        'green': '#3F994D',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

