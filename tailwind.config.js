const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  variants: {
    animation: ['hover', 'focus'],
    backgroundColor: [
      "dark",
      "hover",
      "group-hover",
      "even",
      "odd",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: [
      "focus",
      "focus-within",
      "dark",
      "dark-focus",
      "dark-focus-within"
    ],
    textColor: [
      'dark',
      'responsive',
      'hover',
      'focus',
      "dark-hover",
      "dark-focus"
    ]
  },
  plugins: [require("tailwindcss-dark-mode")()],
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: ".dark-mode",
    darkMode: 'class',
    extend: {
      container: {
        padding: '1rem',
      },
      colors: {
        'primary': '#8cc63f',
        'primary-light': '#0e9f6e42',
      },
      fontFamily: {
        sans: [
          'Comfortaa',
          'cursive',
          'sans-serif'
        ],
        // sans: ['Quicksand', 'sans-serif'],
        // sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'translateY(3px)' },
          '50%': { transform: 'translateY(-3px)' },
        }
      }, 
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  }
}