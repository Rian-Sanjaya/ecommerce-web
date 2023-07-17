/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sea-buckthorn': {
          50: '#FEFAF4',
          100: '#FEF6E9',
          200: '#FCE8C8',
          300: '#FBDBA7',
          400: '#F7BF66',
          500: '#F4A424',
          600: '#DC9420',
          700: '#926216',
          800: '#6E4A10',
          900: '#49310B'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

