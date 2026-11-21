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
          950: '#040711',
          900: '#080D1A',
          850: '#0E1726',
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
          200: '#FDF6D8',
          300: '#F3E5AB',
          400: '#E5C468',
          500: '#D4AF37',
          600: '#B89426',
          700: '#8C6F19',
          800: '#5C480E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -4px rgba(212, 175, 55, 0.22)',
        'gold-glow-lg': '0 0 45px -4px rgba(212, 175, 55, 0.35)',
        'card-subtle': '0 12px 35px -8px rgba(0, 0, 0, 0.65)',
        'inner-gold': 'inset 0 1px 1px 0 rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
