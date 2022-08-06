/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        primaryText:"#88C0D0",
        secondaryText:"#8FBCBB",
        background:"#2E3440",
        

      }
    },
  },
  plugins: [],
}
