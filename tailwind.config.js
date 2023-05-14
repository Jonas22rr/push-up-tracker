/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
        colors: {
            primaryDark: "#363636",
            secondaryDark: "#464646",
            accent: "#02C093",
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
