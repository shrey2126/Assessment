/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-white': '#F5F4F0',
                'primary-muted': 'rgba(245, 244, 240, 0.62)',
                'primary-grey': '#595E52',
                'primary-black': '#0B1100',
                'primary-olive': '#89A84A',
                'primary-accent': '#89A84A',
                'secondary-grey100': 'rgba(89, 94, 82, 0.2)',
                'secondary-grey200': 'rgba(89, 94, 82, 0.45)',
            },
            fontFamily: {
                'libre-caslon': ['"Libre Caslon Text"', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
