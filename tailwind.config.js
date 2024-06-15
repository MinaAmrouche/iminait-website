/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#99d0f4",
        secondary: "#2c6d90",
        tertiary: "#d1eafa",
        accent: "rgb(236 84 36)",
        background: "#e8f4fd",
        text: "#333333",
        border: "#dedede",
        muted: "#999999",
      },
      fontFamily: {
        sans: ["futura-pt", "Helvetica", "Arial", "sans-serif"],
        mono: ["monospace"],
        display: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
