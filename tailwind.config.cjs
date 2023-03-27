/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			spacing: {
				112: '28rem',
				128: '32rem',
				144: '36rem'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				corporate: {
					...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
					primary: '#FD1C79',
					'primary-content': '#FFF',
					'base-200': '#fafafa'
				}
			}
		]
	}
};
