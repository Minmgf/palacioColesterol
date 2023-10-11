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

      headerImage: {
        'headerImg' : "url('../src/assets/img/header.png')"
      },

      fontFamily: {
        'kavoon' : ['Kavoon', 'cursive'],
        'lilitaOne' : ['Lilita One', 'cursive']
      }

    },
  },
  plugins: [],
}