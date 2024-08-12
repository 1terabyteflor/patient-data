/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#063248",
        "secondary-cyan": "#B5BCBD",
        "third-beige": "#F8F8F7"
      },
    },
  },
  plugins: [],
}

