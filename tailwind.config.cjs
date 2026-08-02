/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A020F0",
        white: "#ffffff",
        black: "#232323",
        "skill-js": "#f7df1e",
        "skill-ts": "#3178c6",
        "skill-py": "#4b8bbe",
        "skill-cpp": "#00599c",
      },
      borderRadius: {
        'xl': '1.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
