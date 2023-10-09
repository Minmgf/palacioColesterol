/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage:{
        'loginImg': "url('../src/assets/img/loginImg.jpg')"
      },

      fontFamily: {
        'kavoon' : ['Kavoon', 'cursive'],
        'lilita one' : ['Lilita One', 'cursive']
      }

    },
  },
  plugins: [],
}