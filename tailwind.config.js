/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Sans-serif": "Roboto, sans-serif",
      Serif: "IBM Plex Serif, serif",
      HandWritten: "Allison, cursive",
    },
    extend: {
      colors: {
        background: "#F6F3E9",
        green: {
          dark: "#487254",
          "very-dark": "#01110a",
        },
        grey: {
          basic: "#777",
          border: "#E6E1D2",
        },
      },
    },
  },
  plugins: [],
};
