/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia_sans: ["'Sofia Sans Semi Condensed'", "sans-serif"],
        sofia: [ "Sofia", "sans-serif" ]
      },
      colors: {
        background: '#454545',   
        foreground: '#E1E1E1', 
        muted: '#FEFEFE',  
        pink_one: '#FACDE5',
        pink_two: '#F7B9D7',
        pink_three: '#F18DBC',
        pink_four: '#ED5C9B',
        pink_five: '#E0218A',
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(252, 104, 230, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(252, 104, 230, 0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        }
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite'
      }
    },
  },
  plugins: [],
}
