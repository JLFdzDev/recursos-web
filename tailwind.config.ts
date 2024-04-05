import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#8685EF',
				secondary: '#D5FF00',
				dark: '#474554',
				darken: '#333333',
				light: '#FAF8FF',
			},
		},
	},
	plugins: [],
}
export default config
