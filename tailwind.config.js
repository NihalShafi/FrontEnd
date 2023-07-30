/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Lightgray: 'hsl(212, 45%, 89%)',
        Grayishblue: 'hsl(220, 15%, 55%)',
Darkblue: 'hsl(218, 44%, 22%)'
      },
    }
  },
  plugins: [],
}

