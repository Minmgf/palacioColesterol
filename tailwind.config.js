/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

 

      fontFamily: {
        'kavoon' : ['Kavoon', 'cursive'],
        'lilitaOne' : ['Lilita One', 'cursive']
      },  

      screens: {
        'cellphone': '320px'
      },

    },
  },
  plugins: [],
}