/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#7127ba',
					light: '#9857d3',
					dark: '#4f228d',
				},
				secondary: '#9857d3', // 使用浅紫色替代蓝色
				background: {
					main: '#1a0b2e',
					secondary: '#2b0b3a',
					tertiary: '#2c1250',
				},
				text: {
					main: '#ffffff',
					secondary: '#ccd6f6',
				},
			},
			fontFamily: {
				preahvihear: ['Preahvihear', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				jakarta: ['Plus Jakarta Sans', 'sans-serif'],
			},
			fontSize: {
				'title-large': ['50px', { lineHeight: '1.2' }],
				'title-medium': ['40px', { lineHeight: '1.2' }],
				'title-small': ['34px', { lineHeight: '1.2' }],
				'card-title': ['26px', { lineHeight: '1.2' }],
				'body-large': ['22px', { lineHeight: '1.5' }],
				'body-small': ['18px', { lineHeight: '1.5' }],
			},
			borderRadius: {
				card: '15px',
			},
			boxShadow: {
				card: '4px 7px 26px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [],
};
