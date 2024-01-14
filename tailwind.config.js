/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontSize: {
            xs: [
                '1.2rem',
                {
                    lineHeight: '1.6rem',
                },
            ],
            sm: [
                '1.4rem',
                {
                    lineHeight: '1.8rem',
                },
            ],
            base: [
                '1.4rem',
                {
                    lineHeight: '2rem',
                },
            ],
            lg: [
                '1.6rem',
                {
                    lineHeight: '2rem',
                },
            ],
            xl: [
                '1.6rem',
                {
                    lineHeight: '2.2rem',
                },
            ],
            '2xl': [
                '2rem',
                {
                    lineHeight: '2.5rem',
                },
            ],
            '3xl': [
                '2.4rem',
                {
                    lineHeight: '3.4rem',
                },
            ],
            '4xl': [
                '3.2rem',
                {
                    lineHeight: '4rem',
                },
            ],
            '5xl': [
                '4.8rem',
                {
                    lineHeight: '6rem',
                    letterSpacing: '0.096rem',
                },
            ],
            '6xl': [
                '5.8rem',
                {
                    lineHeight: '7.2rem',
                },
            ],
            '7xl': [
                '11rem',
                {
                    lineHeight: '13.6rem',
                    letterSpacing: '0.22rem',
                },
            ],
            '8xl': [
                '12.4rem',
                {
                    lineHeight: '15.4rem',
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
                'gradient-gold': 'linear-gradient(95deg, #D4D4D4 0%, #D2902E 63.41%, #E7C71A 100%)',
                'gradient-gold-hover': 'linear-gradient(95deg, #D2902E 9.9%, #E7C71A 59.9%, #D4D4D4 96.35%)',
                'gradient-silver': 'linear-gradient(95deg, #B8B8B8 0%, #3A3A3A 63.41%, #FCFCFC 100%)',
                'gradient-silver-hover': 'linear-gradient(95deg, #3A3A3A 0%, #B8B8B8 72.92%, #FCFCFC 100%)',
            },
        },
    },
    plugins: [],
};
