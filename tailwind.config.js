/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontSize: {
            xs: [
                '1.2rem',
                {
                    lineHeight: '1.6rem',
                    fontWeight: '400',
                },
            ],
            sm: [
                '1.4rem',
                {
                    lineHeight: '1.8rem',
                    fontWeight: '400',
                },
            ],
            base: [
                '1.4rem',
                {
                    lineHeight: '2rem',
                    fontWeight: '300',
                },
            ],
            lg: [
                '1.6rem',
                {
                    lineHeight: '2rem',
                    fontWeight: '300',
                },
            ],
            xl: [
                '1.6rem',
                {
                    lineHeight: '2.2rem',
                    fontWeight: '300',
                },
            ],
            '2xl': [
                '2rem',
                {
                    lineHeight: '2.5rem',
                    fontWeight: '400',
                },
            ],
            '3xl': [
                '2.4rem',
                {
                    lineHeight: '3.4rem',
                    fontWeight: '400',
                },
            ],
            '4xl': [
                '3.2rem',
                {
                    lineHeight: '4rem',
                    fontWeight: '400',
                },
            ],
            '5xl': [
                '4.8rem',
                {
                    lineHeight: '6rem',
                    letterSpacing: '0.096rem',
                    fontWeight: '400',
                },
            ],
            '6xl': [
                '5.8rem',
                {
                    lineHeight: '7.2rem',
                    fontWeight: '500',
                },
            ],
            '7xl': [
                '11rem',
                {
                    lineHeight: '13.6rem',
                    letterSpacing: '0.22rem',
                    fontWeight: '400',
                },
            ],
            '8xl': [
                '12.4rem',
                {
                    lineHeight: '15.4rem',
                    fontWeight: '400',
                },
            ],
        },
        screens: {
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
            sm: { max: '639px' },
        },
        extend: {
            colors: {
                white: '#FFF',
                black: '#000',
                'primary-grey': '#989898',
                'primary-pink': '#F707C3',
                'primary-purple': '#B61CC3',
                'primary-blue': '#2200F2',
            },
            backgroundColor: {
                header: 'rgba(4, 4, 19, 0.10)',
            },
            backgroundImage: {
                'gradient-pink': 'linear-gradient(135deg, #f707c3 10.13%, #b61cc3 51.04%, #2200f2 95.83%)',
                'gradient-pink-hover': 'linear-gradient(135deg, #2200f2 0%, #f707c3 46.87%, #b61cc3 100%)',
            },
        },
    },
    plugins: [],
};
