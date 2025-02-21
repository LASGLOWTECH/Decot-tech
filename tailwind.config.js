/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        Primarycolor: '#1B6991',
        Secondrycolor: '#3BBDD0',
        greyBlack: '#181B38',
        grey: '#fafafa',


        
      }
    },

  },
  plugins: [],
}