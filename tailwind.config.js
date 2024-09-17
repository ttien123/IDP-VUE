/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        GrandH: ['"Grand Hotel"', "cursive"],
        Poppins: ['"Poppins"', "sans-serif"],
      },
      backgroundImage: {
        bgMobileNav: 'url("src/assets/img/side-menu.jpg")',
        bgOverlay: 'url("src/assets/img/bg-overlay.jpg")',
        bgHeader:
          "linear-gradient(30deg, rgba(32, 32, 32, 0.9) 0%, rgba(31, 31, 31, 0.9) 100%)",
        bgPrimaryLinear:
          "linear-gradient(to right, #fc2547 0%, #ff5a00 50%, #fc2547 100%)",
        bgTextPrimary: "linear-gradient(to right,#fc2547 50%, #ff5a00 100%)",
      },
      boxShadow: {
        shadowHeader: "0 10px 10px -10px rgba(0, 0, 0, 0.35)",
        shadowDropdown: "0 12px 24px 0 rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        dropDownHeaderScroll: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },

        opacitySearch: {
          "0%": { opacity: "0" },
          "100%": { transform: "1" },
        },
      },
      animation: {
        dropDownHeaderScroll: "dropDownHeaderScroll 0.5s linear forwards",
        opacitySearch: "opacitySearch 0.25s ease forwards",
      },
    },
  },
  plugins: [],
};
