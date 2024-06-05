/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ["Roboto", 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif']
      },
      screens: {
        'xsm': '320px',

        'sm': '659px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      minHeight:{
        'intro' : '500px',
        'about' : '700px'
      }
    },
  },
  plugins: [],
}

