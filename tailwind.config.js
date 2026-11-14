/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          warm: '#FAF7F2',
          light: '#FDFBF7'
        },
        beige: {
          DEFAULT: '#F0E8DE',
          soft: '#F0E8DE',
          medium: '#E7DCD0',
          dark: '#DACABE'
        },
        gold: {
          light: '#DFBF8A',
          DEFAULT: '#C6A36A',
          dark: '#A88247',
          deep: '#8C6831'
        },
        blush: {
          light: '#F8EEEC',
          DEFAULT: '#E8CFCB',
          soft: '#DFBBB6',
          dark: '#C89E98'
        },
        espresso: {
          DEFAULT: '#302720',
          dark: '#211A15',
          soft: '#42362E'
        },
        taupe: {
          DEFAULT: '#85796F',
          light: '#A3978E',
          soft: '#6F6359'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(48, 39, 32, 0.07)',
        'luxury-hover': '0 30px 60px -15px rgba(198, 163, 106, 0.18)',
        'gold-glow': '0 0 25px rgba(198, 163, 106, 0.25)',
      },
      letterSpacing: {
        'widest-editorial': '0.22em',
        'loose-luxury': '0.15em'
      }
    },
  },
  plugins: [],
}
