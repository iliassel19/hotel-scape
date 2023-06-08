module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      h1: "67px",
      h2: "51px",
      h3: "38px",
      h4: "28px",
      h5: "22px",
      base: "16px",
      caption: "12px",
    },
    fontFamily: {
      space: "Space Mono, monospace",
      work: "Work Sans, sans-serif",
    },
    colors: {
      bg: "#2B2B2B",
      bgSec: "#3B3B3B",
      captionc: "#858584",
      white: "#FFFFFF",
      cta: "#A259FF",
      "cta-h": "#613599",
      blue: "#377DF7",
      pink: "#FF6250",
    },
    extend: {
      backgroundImage: {
        auction: "url('/Assets/Images/Primary-Mushroom-img.png')",
      },
    },
  },
  plugins: [],
};
