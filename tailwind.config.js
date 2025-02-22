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
        darkBlue: '#001C28',

        Primarycolor: '#1B6991',
        Secondarycolor: '#00A9ED',
        greyBlack: '#181B38',
        grey: '#fafafa',


        
      }
    },

  },
  plugins: [],
}