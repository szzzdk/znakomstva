/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ["Rubik", "sans-serif"],
    },
    colors: {
      btnCustomColor: "#42204E",
    }
  },
  plugins: [],
}