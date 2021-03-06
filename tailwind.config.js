const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.js", "./src/**/*.css"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    colors: {
      white: colors.white,
      gray: colors.coal,
      current: "currentColor",
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
      concrete: "#7F8076",
      platinum: "#E5E6E4",
      "dark-charcoal": "#2E2E2E",
      "ecto-plasm-0": "#64b8c9",
      "ecto-plasm-2": "#6bfffb",
      "ecto-plasm-3": "#9efdff",
      "ecto-plasm-4": "#e0f9ff",
      "jet-black": "#0A0A0A",
      "outer-space": "#414a4c",
      "aluminum-foil": "#d2d9db",
      "success-green": "#4BB543",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
