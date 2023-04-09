/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "991px" },
      lg: { min: "992px", max: "1200px" },
    },
    extend: {},
  },
  plugins: [],
}
