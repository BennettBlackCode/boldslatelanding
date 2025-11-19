/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a1a', // Deep dark blue/black background
          primary: '#2563eb', // Blue accent
          secondary: '#1e40af', // Darker blue
          text: '#f8fafc', // Light text
          muted: '#94a3b8', // Muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
