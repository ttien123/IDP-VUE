/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', "sans-serif"],
        GrandH: ['"Grand Hotel"', "cursive"],
        Poppins: ['"Poppins"', "sans-serif"],
      },
      backgroundImage: {
        bgOverlay: 'url("src/assets/img/bg-overlay.jpg")',
        bgSlider: 'url("src/assets/img/test-banner.jpg")',
      }
    },
  },
  plugins: [],
}