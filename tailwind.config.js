/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#4b4334",
        secondary: "#7e7666",
        "red-orpiment": "#cb6f56",
        lox: "#e99077",
        "illusive-dream": "#e0d3c2",
      },
    },
    container: {
      padding: "1rem",
    },
    fontFamily: {
      display: ["Playfair Display", "serif"],
      body: ["Oxygen", "sans-serif"],
    },
  },
  plugins: [],
};
