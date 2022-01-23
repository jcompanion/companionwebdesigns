module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      "sans": ["Roboto", "sans-serif"],
      "serif": ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "brand": "#2E717B",
      },
    },
  },
  plugins: [],
};
