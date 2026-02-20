/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '400px',
                'tall': { 'raw': '(min-height: 700px)' },
            },
            colors: {
                primary: "#0f172a", // Dark slate
                secondary: "#1e293b", // Slate 800
                accent: "#38bdf8", // Sky 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
