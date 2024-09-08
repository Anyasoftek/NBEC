const { Poppins, Bubblegum_Sans } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend:{
      colors:{
        white:{
          DEFAULT:"#FFFFFF"
        },
        blue:"#2563EB",
        grey:"#C8C8C8",
        lightgrey:"#5A5959",
        darkgrey:"#303030",
        supergrey:" #F3F3F3"
        
        
        
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        futura: ['Futura PT', 'sans-serif'],
        poppins:["Poppins","sans-serif"],
        mulish:["Mulish","sans-serif"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    }
   
  },
  plugins: [],
};
