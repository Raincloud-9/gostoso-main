/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xxs: "375px",
			xs: "380px",
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},
		fontFamily: {
			themed: ["Love Ya Like A Sister", "cursive"],
		},
		fontSize: {
			"2xsm": "10px",
			xsm: "12px",
			sm: "13px",
			reg: "15px",
			lg: "18px",
			"2xl": "22px",
			"3xl": "25px",
			"4xl": "32px",
			"5xl": "40px",
			"6xl": "50px",
			"7xl": "70px",
			"8xl": "80px",
			"9xl": "90px",
			"10xl": "100px",
		},
		extend: {
			colors: {
				primary: "#feb238",
				"primary-content": "#372200",
				"primary-dark": "#fe9e05",
				"primary-light": "#fec66b",

				secondary: "#fe3838",
				"secondary-content": "#ffffff",
				"secondary-dark": "#fe0505",
				"secondary-light": "#fe6b6b",

				background: "#f2f0ee",
				foreground: "#fcfbfb",
				border: "#e3e0db",

				copy: "#2b2721",
				"copy-light": "#736959",
				"copy-lighter": "#9b907e",

				success: "#38fe38",
				warning: "#fefe38",
				error: "#fe3838",

				"success-content": "#003700",
				"warning-content": "#373700",
				"error-content": "#ffffff",
			},
		},
	},
	plugins: [],
};
