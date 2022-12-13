/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        banner: "url('../src/assets/Kabasaran.jpg')"
      })

    },
  },
  plugins: [],
}
