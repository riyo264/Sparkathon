/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        walmart: {
          blue: '#0071ce',
          'blue-dark': '#004c91',
          yellow: '#ffc220',
          'yellow-dark': '#e6a800',
          gray: '#f4f4f4',
          'gray-dark': '#e6e6e6',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}