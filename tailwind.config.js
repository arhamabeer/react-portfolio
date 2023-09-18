/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGray: "#333232",
        projModalBg: "rgba(17, 17, 17, 0.75)",
        curveBG: "#ffb400",
      },
    },
  },
  plugins: [],
};
