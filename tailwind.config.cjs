/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    /* screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }, */
    colors: {
      'bg-color':'#181818',
      'dark-bg': '#212121',
      'dark-800':'#27272a', 
      'dark-900':'#18181b',
      'red-logo' : '#ff0000',
      'white' : '#ffffff'
      
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
