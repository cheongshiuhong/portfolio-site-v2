const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Russo One', ...defaultTheme.fontFamily.sans],
      fancy: ['Dancing Script']
    },
    extend: {
      screens: {
        'sm': '520px',
        'h-sm': { raw: '(min-height: 468px)' },
        'h-md': { raw: '(min-height: 780px)' },
        'h-lg': { raw: '(min-height: 1200px)' },
      },
      height: {
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%'
      },
      width: {
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '120': '30rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '232': '58rem'
      },
      maxHeight: {
        '192': '48rem',
        '224': '56rem',
        '240': '60rem',
        '320': '80rem'
      },
      maxWidth: {
        '256': '64rem'
      }
    }
  },
  variants: {
    extend: {
      fontSize: ['hover']
    },
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar')
  ]
}
