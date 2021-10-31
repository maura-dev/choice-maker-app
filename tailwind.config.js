const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green:colors.emerald,
      white:colors.coolGray,
      blue: colors.blue,
      red: colors.red 
    },
    
    extend: {
      fontFamily: {
        lato: ["'Lato', sans-serif"],
        cursive:['"Dancing Script", cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
