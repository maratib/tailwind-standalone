const defaultTheme = require("tailwindcss/defaultTheme");
// tailwind.config.js
module.exports = {
  mode: "jit",
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "bg-start": "#38738c",
        "app-bg": "#111827",
        "search-bg": "#4B5563",
        "light-yellow": "#FEF3C7",
        "requester-bg": "#FEF3C7",
        "yellow-nav": "#E7BA19",
        "midnight-blue": "#192745",
        "medium-gray": "#4B5563",
        "normal-gray": "#9CA3AF",
        "request-text": "#787878",
        "sky-blue": "#5FC4EE",
        current: "#ffffff",
      },
      width: {
        "card-width": "232px",
        "card-width-xl": "280px",
        "popular-film-thumbnail": "120px",
        "popular-film-width": "380px",
        "73px": "73px",
        "100px": "100px",
        "366px": "366px",
      },
      height: {
        "popular-film-thumbnail": "120px",
        "128px": "128px",
        "52px": "52px",
        "73px": "73px",
        "100px": "100px",
      },
      borderRadius: {
        large: "10px",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
