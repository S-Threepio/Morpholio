/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "1150px",
      pad: "850px",
      sm: "640px", // Custom small screen breakpoint
      md: "768px", // Custom medium screen breakpoint
      lg: "1024px", // Custom large screen breakpoint
      xl: "1280px", // Custom extra-large screen breakpoint
    },
    extend: {},
  },
  plugins: [],
};