export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bhutanRed: "#9B1C1C",   // deep maroon
        bhutanGold: "#FFD700",  // saffron/golden yellow
        bhutanGreen: "#006400", // dark green
        bhutanBlue: "#1E3A8A",  // deep blue
      },
      fontFamily: {
        heading: ["Merriweather", "serif"], // decorative for headings
        body: ["Inter", "sans-serif"],      // clean for body text
      },
    },
  },
  plugins: [],
}
