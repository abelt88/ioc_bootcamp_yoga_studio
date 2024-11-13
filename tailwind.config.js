/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        rust: '#C97324',
        cream: '#FBF2E9',
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        sub: ["Poppins", "serif"],
        heading: ["Oranienbaum", "serif"],
        
      }
    },
  },
  plugins: [],
}
