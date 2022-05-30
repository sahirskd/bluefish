module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      colors: {
        "bluefish-100": "#3373B9",
        "bluefish-200": "#0E3160",
        "bluefish-300": "#031552",
      },
    },
  },
  plugins: [],
};
