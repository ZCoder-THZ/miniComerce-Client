/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,vue}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors: {
                'mainColor': '#6366f1'
            }
        },
    },
    plugins: [require('flowbite/plugin')],
}
