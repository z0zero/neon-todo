/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: {
          DEFAULT: '#D4FF00', // The Hero Color
          hover: '#c0e600',
        },
        dark: {
          bg: '#050505', // Almost pure black
          card: '#0A0A0A', // Subtle contrast
          border: '#1F1F1F',
        }
      },
      animation: {
        'enter': 'enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'check': 'check 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        enter: {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        check: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
