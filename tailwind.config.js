/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060A12',
          900: '#0B1120',
          850: '#0F172A',
          800: '#141E34',
          750: '#1A2744',
          700: '#223254',
          600: '#2F426B',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F6F2EA',
          200: '#EFE8DA',
          300: '#DECFAF',
          400: '#C7B692',
          500: '#A89772',
        },
        gold: {
          300: '#F3E5AB',
          400: '#E5C468',
          500: '#D4AF37',
          600: '#B89426',
          700: '#8C6F19',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.15)',
        'gold-glow-lg': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'card-subtle': '0 10px 30px -10px rgba(2, 6, 23, 0.7)',
      },
    },
  },
  plugins: [],
}
