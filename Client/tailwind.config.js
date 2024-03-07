/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins": "Poppins, sans-serif"
      },
      grayscale: {
        65 : "65%"
      },
      borderWidth:{
        1 : "1px"
      },
    },
  },
  plugins: [],
}

