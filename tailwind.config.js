/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0C0C0C",
        golden:"#DCCA87",
        crimson:"#F5EFDB",
      },
      fontFamily: {
        heading: ["Cormorant Upright", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
