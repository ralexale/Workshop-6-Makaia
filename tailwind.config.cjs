/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-bob": "url('./bobBgg.png')",
                cartel: "url('https://i.ibb.co/0tf8Hqd/cartel.png')",
            },
        },
    },
    plugins: [],
};
