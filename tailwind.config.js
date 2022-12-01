const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
  ],
  safelist: ["bg-primary "],
  darkMode: false,
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      lancelot: ["Lancelot Pro", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#282828",
        primary: "#D6C9A5",
        secondary: "#B49A5D",
        "brand-red": "#BA1B00",
        "brand-gray": "#D9D9D9",
        "brand-gray-900": "#909090",
        "brand-creme": "#F8F9F4",
        "brand-gray-800": "#F3F0E9",
      },
      screens: {
        "2xl": "1340px",
      },
      boxShadow: {
        "4xl": "0 8px 28px 0 rgba(0,0,0,0.07)",
      },
      backgroundImage: {
        header:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.66) 0%, rgba(0, 0, 0, 0) 100%)",
        g2: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
