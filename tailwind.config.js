/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        bhutanRed: "#9B1C1C",
        bhutanGold: "#FFD700",
        bhutanGreen: "#006400",
        bhutanBlue: "#1E3A8A",
      },

      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
}