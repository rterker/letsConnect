/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./client/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      height: {
        160: '40rem'
      },
      width: {
        160: '40rem'
      },
      keyframes: {
        slideIn: {
          '0%': {transform: 'translateX(100vw)'},
          '100%': {transform: 'translateX(0%)'}
        },
        slideOut: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100vw)'}
        }
      },
      animation: {
        slideIn: 'slideIn 0.75s ease-in-out forwards',
        slideOut: 'slideOut 0.75s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

