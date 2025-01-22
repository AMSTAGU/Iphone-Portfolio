/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 3px 100px rgba(0, 0, 0, 0)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
};
