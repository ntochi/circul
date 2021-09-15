const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    '',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },

      colors: {
        blue: {
          uranian: '#B0DAF1',
          bell: '#8D91C7',
          rhythm: '#5D5D81',
          violet: '#3B3355',
          light: '#FAF6FF'
        }
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
