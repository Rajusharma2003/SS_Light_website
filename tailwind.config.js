/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html", ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.hero-header::before': {
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '90%',
          top: '0',
          left: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          clipPath: 'polygon(66% 0, 100% 0, 100% 100%, 33% 100%)',
        },
      });
    },

    function ({ addComponents }) {
      addComponents({
        '.navbar-top::before': {
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          clipPath: 'polygon(66% 0, 100% 0, 100% 100%, 61% 100%)',
        },
      });
    },
  ],
}

