/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar-hide"),
  ],
};
