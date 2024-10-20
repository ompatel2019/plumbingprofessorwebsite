/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer-Variable', 'sans-serif'],
      },
      colors: {
        'c-1': ['#003B6D'],
        'c-2': ['#FF6F61'],
        'c-3': ['#5DADEC'],
        'c-4': ['#F0F0F0'],
        'c-5': ['#2A2A2A']
      }
    },
  },
  plugins: [],
}