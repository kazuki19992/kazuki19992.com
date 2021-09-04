module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ripple: theme => ({
      colors: theme('colors'),
      darken: 0.1
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}
