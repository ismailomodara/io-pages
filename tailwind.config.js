import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006C4C', // Custom blue
        secondary: '#4a5568', // Custom blue
        accent: '#4a5568', // Custom blue
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle default shadow
        "strong": "0 4px 8px rgba(0, 0, 0, 0.2)", // Stronger shadow
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
}

