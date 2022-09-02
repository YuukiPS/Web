module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
        },
    },
    plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
