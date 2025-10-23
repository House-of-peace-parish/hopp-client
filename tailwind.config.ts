import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                light: '#F5F5F5',
                dark: '#111827',
                green: {
                    faith: '#1E5631',
                    growth: '#2E8B57',
                },
                blue: {
                    trust: '#5A9BD5',
                    peace: '#3B82F6',
                },
                red: {
                    passion: '#A42A2A',
                    energy: '#B91C1C',
                },
            }
        },
        screens: {
            '3sm': '375px',
            '2sm': '428px',
            'xsm': '575px',
            'sm': '640px',
            'md': '768px',
            'lmd': '920px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
};

export default config;