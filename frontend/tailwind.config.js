/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          600: "#2F855A", // Emerald-600
        },
        cyan: {
          950: "#00B2FF", // Cyan-950
        },
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, #2F855A, #00B2FF)",
      },
    },
  },
  plugins: [],
};
