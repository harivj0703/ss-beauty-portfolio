/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          deep: '#641D35',
          DEFAULT: '#641D35',
          rose: '#922D4D',
          dark: '#4D1225',
          light: '#7A2442'
        },
        rose: {
          burgundy: '#922D4D',
          dusty: '#D98FA5',
          DEFAULT: '#D98FA5',
          soft: '#E8ADC0'
        },
        blush: {
          soft: '#F2C9D3',
          DEFAULT: '#F2C9D3',
          light: '#F8DFE5',
          deep: '#E6B0BD'
        },
        cream: {
          pink: '#FBE8EC',
          DEFAULT: '#FBE8EC',
          warm: '#FFF8F6'
        },
        warmwhite: {
          DEFAULT: '#FFF8F6',
          pure: '#FFFFFF'
        },
        espresso: {
          DEFAULT: '#38232C',
          dark: '#2A1820',
          soft: '#523842'
        },
        taupe: {
          DEFAULT: '#826872',
          light: '#9E858E'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', '"Alex Brush"', 'cursive'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'blob-alt': '40% 60% 70% 30% / 50% 60% 40% 50%',
        'organic-lg': '3rem 1.5rem 3rem 1.5rem',
        'organic-xl': '4rem 2rem 4rem 2rem',
        'organic-pill': '9999px',
      },
      boxShadow: {
        'bubbly': '0 20px 40px -15px rgba(100, 29, 53, 0.08)',
        'bubbly-hover': '0 25px 50px -12px rgba(100, 29, 53, 0.16)',
        'rose-glow': '0 0 35px rgba(217, 143, 165, 0.35)',
        'burgundy-glow': '0 10px 30px -5px rgba(100, 29, 53, 0.3)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
