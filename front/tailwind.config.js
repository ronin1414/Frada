/** @type {import('tailwindcss').config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const daisyui = require('daisyui');
const flowbite = require('flowbite/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/css/**/*.css",
    "./public/**/*.svg",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      xxs: "150px",
      xs: "290px",
      ssm: "430px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      "2xl": "1536px",
      "3xl": "1680px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        'green-body': '#00FF00',
        'custom-blue': '#222651',
      },
    },
  },
  plugins: [
    daisyui,
    flowbite
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // opcional
  }
};