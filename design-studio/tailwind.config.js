/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Um preto levemente azulado para dar aquele ar "tech" da Gladia
        background: '#0a0a0a', 
        surface: '#121212',
        primary: '#ffffff',
        accent: '#3b82f6', // Um azul elétrico discreto
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Importe a fonte Inter no index.css
      }
    },
  },
  plugins: [],
}