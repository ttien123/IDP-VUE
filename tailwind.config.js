/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                GrandH: ['"Grand Hotel"', 'cursive'],
                Poppins: ['"Poppins"', 'sans-serif'],
            },
            backgroundImage: {
                bgMobileNav: 'url("src/assets/img/side-menu.jpg")',
                bgOverlay: 'url("src/assets/img/bg-overlay.jpg")',
                bgHeader: 'linear-gradient(30deg, rgba(32, 32, 32, 0.9) 0%, rgba(31, 31, 31, 0.9) 100%)',
                bgPrimaryLinear: 'linear-gradient(to right, #fc2547 0%, #ff5a00 50%, #fc2547 100%)'
            },
            boxShadow: {
                shadowHeader: '0 10px 10px -10px rgba(0, 0, 0, 0.35)',
                shadowDropdown: '0 12px 24px 0 rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [],
};
