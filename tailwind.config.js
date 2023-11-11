/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // this means that if the html class is dark, it becomes dark ;Source: https://tailwindcss.com/docs/dark-mode
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        //get variable from global.scss

        //mono
        c0: "var(--color-0)",  
        c4: "var(--color-4)",  
        c8: "var(--color-8)",  
        cc: "var(--color-c)",  
        cf: "var(--color-f)", 

        //blue
        c8Blue: "var(--color-8Blue)", 
        ccBlue: "var(--color-cBlue)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwind-scrollbar-hide')
  ],
};
