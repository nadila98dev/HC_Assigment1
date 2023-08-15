/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#FF9C1A",
        third: "#EC1B09",
      },
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Raleway"],
      },
    },
  },
  plugins: [],
};
