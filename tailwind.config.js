/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: {
          50: "#eafaff",
          100: "#d1f5ff",
          200: "#adeeff",
          300: "#74e6ff",
          400: "#34d3ff",
          500: "#05b4ff",
          600: "#008eff",
          700: "#0074ff",
          800: "#0061d9",
          900: "#0056a9",
          950: "#063970",
        },
      },
    },
  },
  plugins: [],
};
