/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
    },
    extend: {
      fontFamily: {
        "primary": ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: "#3B2125",
        secondary: "#932421"
      },
      keyframes: {
        wiggle: {
          '90%': {transform: 'rotate(0deg)'},
          '93.3%': {transform: 'rotate(4deg)'},
          '96.6%': {transform: 'rotate(-4deg)'},
          '100%': {transform: 'rotate(0deg)'},
        }
      },
      animation: {
        'wiggle-start': 'wiggle 4s linear infinite'
      }
    },
  },
  variants: {
    animationDelay: ["responsive", "hover"],
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
