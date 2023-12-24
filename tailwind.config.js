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
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0%)'}
        }
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

