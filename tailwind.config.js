/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "360px", //mobile-xs
      xs: "412px", //mobile
      sm: "640px",
      md: "768px", //tablet
      lg: "976px", //tablet portait
      xl: "1280px", //tablet-landscape/laptop/720p
      "2xl": "1920px", //desktop/1080p
      "3xl": "2560px", //1440p res
    },
    extend: {
      colors: {
        projCard: "rgba(255, 255, 255, 0.24)",
      },
      animation: {
        "wave-animation": "wave-animation 1s linear infinite",
      },
      keyframes: {
        "wave-animation": {
          "0%": { transform: "rotate( 0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate( 0.0deg)" },
          "100% ": { transform: "rotate( 0.0deg)" },
        },
      },
      transformOrigin: {
        hand: "70% 70%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".wave": {
          animation: "wave-animation",
          "transform-origin": "70% 70%",
          display: "inline-block",
        },
      });
    },
  ],
};
