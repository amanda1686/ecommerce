module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Personaliza los colores según tus necesidades
        brown: {
          light: "#D88530",
          dark: "#69311d",
        },
        white: "#ffffff",
        black: "#000000",

        yellow: {
          light: "#f2c879",
          dark: "#D88530" 
        },

        blue: {
          light: "#1f5373",
          dark: "#032940"
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};