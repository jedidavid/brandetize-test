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
        sari: "#e27c61",
        "vintage-coral": "#d88d78",
        "sugar-milk": "#fffaf3",
        "wheat-bread": "#ddba7c",
        "aged-olive": "#7e7666",
        "black-space": "#535353",
        maire: "#2c2820",
        stone: "#aa9f89",
        cream: "#fdf3e3",
        "limonite-brown": "#4d4433",
      },
      maxWidth: {
        82: "22rem",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
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
