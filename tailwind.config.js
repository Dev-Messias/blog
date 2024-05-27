/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sans": ["Overpass"]
      },
      backgroundImage:{
        'imgInicio': "url('./src/assets/images/bg-pattern-intro-desktop.svg')",
        'imgMobile': "url('./src/assets/images/bg-pattern-intro-mobile.svg')",
        "imgRoud": "url('./src/assets/images/bg-pattern-circles.svg')",
      }
    },
  },
  plugins: [],
}
