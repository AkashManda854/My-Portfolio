/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-red': '#ff8a8a',
        'light-orange': '#ffb347',
        'light-yellow': '#fff68f',
        'light-green': '#b0f2b6',
        'light-blue': '#add8e6',
        'light-indigo': '#c3b1e1',
        'light-violet': '#e1b3ff',
        'dark-mode-red': '#d26a6a',
        'dark-mode-orange': '#e6a96c',
        'dark-mode-yellow': '#e0cf6a',
        'dark-mode-green': '#78d2a5',
        'dark-mode-blue': '#76b3eb',
        'dark-mode-indigo': '#9d92d1',
        'dark-mode-violet': '#c491dd',
      },
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
