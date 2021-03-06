const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './views/**/*.ejs'
    ]
  },

  theme: {
    fontFamily: {
      'rubik': ['Rubik'],
      'play': ['Playfair Display'],
      'arimo': ['Arimo']
    },

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
        },

        yellow: {
          mustard: '#FFDB58'
        }
      },

      textShadow: {
        'purple': '8px 8px 8px rgba(102, 51, 153, 1)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
    }

  },
  
  variants: {
    extend: {},
  },

  plugins: [
    require('tailwindcss-textshadow')
  ],
}
