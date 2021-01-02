const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      container: {
        padding: '1rem',
      },
      colors: {
        'primary': '#8cc63f',
        'primary-light': '#0e9f6e42',
      },
      fontFamily: {
        sans: ['Comfortaa', 'cursive', 'sans-serif'],
        // sans: ['Quicksand', 'sans-serif'],
        // sans: ['Montserrat', 'sans-serif'],
      },
    }
  }
}