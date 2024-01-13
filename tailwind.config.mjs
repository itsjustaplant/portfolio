/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			jet: '#333333',
			'battleship-gray': '#999999',
			'eerie-black': '#181818',
			'dark-eerie-black': '#212121',
			silver: '#AAAAAA'
		},
		extend: {
			fontSize: {
				xs: '10px',
				sm: '12px',
				md: '14px',
				lg: '20px'
			},
			borderRadius: {
				sm: '4px',
				md: '8px'
			},
			boxShadow: {
				light: '0px 0px 1px 1px rgba(170,170,170,0.6)',
				dark: '0px 0px 1px 1px rgba(66,66,66,0.6)' 
			},
			keyframes: {
				'skeleton-loading': {
					'0%': { 'background-color': 'rgba(111, 111, 111, 0.28)' },
					'100%': { 'background-color': 'rgba(111, 111, 111, 0.12)' }
				}
			},
			animation: {
				skeleton: 'skeleton-loading 1s linear infinite alternate'
			}
		},
	},
	plugins: [],
}
