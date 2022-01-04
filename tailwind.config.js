const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.css"],
  darkMode: false,
  theme: {
    colors: {
      white: colors.white,
      gray: colors.coal,
      daze: "#6b705c",
      "svelte-prime": "#ff5030",
      "slime-green": "#65FF00",
      "dodger-blue-0": "#6bb6ff",
      "dodger-blue": "#1E90FF",
      "dodger-blue-2": "#006ad1",
      "dodger-blue-3": "#0077ea",
      "dodger-blue-4": "#0483ff",
      "strong-blue": "#0068ce",
      "very-dark-blue": "#000030",
      "safety-yellow": "#eed202",
      "safety-cone-orange": "#FF7900",
      "danger-red": "#FF0000",
      "bubble-gum": "#ffc1cc",
      "haze-purple": "#7D7098",
      "plum-purple": "#673147",
      "blue-700": "#4137bf",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
