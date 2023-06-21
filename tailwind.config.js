/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,vue}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors: {
                'mainColor': '#6366f1'
            }
        },
        screens: {
            "xs": '500px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            // Add or modify breakp
        }

    },
    plugins: [require('flowbite/plugin')],
}
