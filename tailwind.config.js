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
          0: '#00fec8',
          1: '#00a985',
          2: '#005442'
        }
      }
    }
  },
  plugins: [],
}
