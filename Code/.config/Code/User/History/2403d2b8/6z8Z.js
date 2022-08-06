/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:false,
  theme: {
    extend: {
      colors:{
        primary: '#202225',
        secondary:'#5865f2'

      }

    },
  },
  plugins: [],
}
