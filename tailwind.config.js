/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('imgs/bg.svg')",
      },
      backgroundColor:{
        'nav': 'rgb(255,255,255,0.3)',
      }
    },
  },
  plugins: [],
}

