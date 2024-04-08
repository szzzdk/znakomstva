/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnCustomColor: "#42204E",
        bgTopbarColor: "#1B0522",
        bgLoginColor: "#381A42",
      }
    },
    fontFamily: {
      'sans': ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
}