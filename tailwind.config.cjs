/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				VeryDarkMagenta: "hsl(300, 43%, 22%)",
				SoftPink: "hsl(333, 80%, 67%)",
				DarkGrayish: "hsl(303, 10%, 53%)",
				LightGrayish: "hsl(300, 24%, 96%)",
			},
			fontFamily: {
				League: ["League Spartan", "sans-serif"],
			},
		},
	},
	plugins: [],
};
