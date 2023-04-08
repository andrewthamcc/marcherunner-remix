/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      runnerGreen: {
        DEFAULT: '#18bc33',
        light: '#1bd339',
        dark: '#15a52d',
      },
      runnerOrange: {
        DEFAULT: '#eb8e14',
        light: '#ed992c',
        dark: ' #d48012',
      },
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
}
