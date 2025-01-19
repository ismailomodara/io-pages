import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Custom blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
}

