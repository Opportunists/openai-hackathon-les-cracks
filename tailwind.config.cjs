/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: "#EE5050",
        secondary: "#CF3A3A",
      },
    },
  },
  plugins: [],
}
