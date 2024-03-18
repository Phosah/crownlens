/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/hero-bg.jpg')",
      },

      fontFamily: {
        questrial: ["Questrial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
