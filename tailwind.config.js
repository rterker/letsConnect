/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./client/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      height: {
        200: '50rem',
        160: '40rem',
        144: '36rem',
        156: '39rem'
      },
      width: {
        160: '40rem',
        144: '36rem',
        156: '39rem'
      },
      minHeight: {
        160: '40rem',
        144: '36rem',
        156: '39rem'
      },
      minWidth: {
        160: '40rem',
        144: '36rem',
        156: '39rem'
      },
      keyframes: {
        slideIn: {
          '0%': {transform: 'translateX(100vw)'},
          '100%': {transform: 'translateX(0%)'}
        },
        slideOut: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100vw)'}
        },
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
        sideBarSlideIn: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0%)'}
        }
      },
      animation: {
        slideIn: 'slideIn 0.75s ease-in-out forwards',
        slideOut: 'slideOut 0.75s ease-in-out forwards',
        fadeIn: 'fadeIn 0.2s ease forwards',
        sideBarSlideIn: 'sideBarSlideIn 0.3s ease-in forwards'
      }
    },
  },
  plugins: []
}

