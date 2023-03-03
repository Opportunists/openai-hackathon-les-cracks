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
        primary: "#3B2125",
        secondary: "#932421"
      },
    },
  },
  plugins: [],
}
