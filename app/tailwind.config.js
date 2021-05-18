module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      primary: "brown",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
