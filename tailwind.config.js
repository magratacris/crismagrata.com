/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      xxs: "360px", //mobile-xs
      xs: "412px", //mobile
      sm: "",
      md: "768px", //tablet
      lg: "976px", //tablet portait
      xl: "1280px", //tablet-landscape/laptop/720p
      "2xl": "1920px", //desktop/1080p
      "3xl": "2560px", //1440p res
    },
    extend: {},
  },
  plugins: [],
};
