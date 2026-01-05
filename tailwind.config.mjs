/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0B0F19', // Deep Space Blue
                    DEFAULT: '#3B82F6', // ArcGIS Blue
                    accent: '#10B981', // GEE Green
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
