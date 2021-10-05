const colors = require('tailwindcss/colors')

require('dotenv').config()

module.exports = {
  purge:{
    enabled: process.env.MODE === "production",
    content: [
      "./assets/**/*.html",
      "./scripts/**/*.js",
      "./scripts/**/*.ts",
      "./scripts/**/*.jsx",
      "./scripts/**/*.tsx"
    ],
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      teal: colors.teal,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
