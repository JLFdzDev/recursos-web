import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#FF3366',
				secondary: '#00CCFF',
				dark: '#333333',
				darken: '#222222',
				light: '#FFFFFF'
			}
		}
	},
	plugins: []
}
export default config
