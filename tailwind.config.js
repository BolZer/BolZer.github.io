const colors = require('tailwindcss/colors')

require('dotenv').config()

module.exports = {
  content: [
    "./assets/**/*.html",
    "./scripts/**/*.js",
    "./scripts/**/*.ts",
    "./scripts/**/*.jsx",
    "./scripts/**/*.tsx"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      teal: colors.teal,
    },
    extend: {
      primary: "#212326",
      secondary: "#36393f"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
