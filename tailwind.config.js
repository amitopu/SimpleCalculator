/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            dropShadow: {
                general: "3px 3px 4px rgba(110, 231, 183, 1)",
                operator: "3px 3px 3px rgba(253, 186, 116, 1)",
            },
        },
    },
    plugins: [],
};
