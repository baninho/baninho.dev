/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          0: '#A0C864',
          1: '#00a985',
          2: '#145F32',
          3: '#FFE100',
          4: '#FF495D'
        }
      },
      fontFamily: {
        'sans': ['PT Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'bereit': ['BereitBold']
      }
    }
  },
  plugins: [],
}
