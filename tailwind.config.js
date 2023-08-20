/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light': '#F1F4FA',
        'dark': '#1A202C',
        'primary': '#3A36DB'
      }
    },
  },
  plugins: [],
}

