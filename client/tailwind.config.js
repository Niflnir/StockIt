module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      dm: ["DM"],
      mt: ["MT"],
    },
    extend: {
      colors: {
        purple: "#62448A",
        dpurple: "#332e65",
        lpurple: "#8054a3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
