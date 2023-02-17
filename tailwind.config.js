/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'primary-mint': '#34a380',
        'mild-mint': '#9de0cc'
      },
    },
  },
  plugins: [],
}
