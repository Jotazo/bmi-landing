/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        gunMetal: "rgb(var(--color-gunMetal) / <alpha-value>)",
        darkElectricBlue: "rgb(var(--color-darkElectric-blue) / <alpha-value>)",
        grey: "rgb(var(--color-grey) / <alpha-value>)",
        white: "rgb(var(--color-white) / <alpha-value>)",
      },
      fontFamily: {
        inter: ["Inter-Regular", "sans-serif"],
        "inter-semiBold": ["Inter-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};

