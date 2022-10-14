/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {

    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg:20,
      xl:24,
      '2xl':32
    },

    colors:{
      'transparent': 'transparent',

      'whith':'#ffffff',
      'black':'#000000', 

      'gray-800': '#515151',
      'gray-500': '#757575',
      'gray-200': '#d9d9d9',

      'blue': '#1672FE',
      'blue-900': '#0F1724'
    },

    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}
