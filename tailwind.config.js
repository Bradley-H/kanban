import { _fontFamily, _width } from '#tailwind-config/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          purple: '#635FC7',
          lightPurple: '#A8A4FF',
          background: '#F4F7FD',
          white: '#FFFFFF',
        },
        neutral: {
          gray: '#828FA3',
          blue: '#E4EBFA',
          light: '#3E3F4E',
        },
        accent: {
          red: '#EA5555',
          lightRed: '#FF9898',
        },
        // Dark mode colors
        dark: {
          purple: '#635FC7',
          backgroundPrimary: '#20212C',
          backgroundSecondary: '#2B2C37',
          card: '#3E3F4E',
          text: '#FFFFFF',
          darkBlue: '#000112',
        }
      },
      width: {
        sidenav: '240px',
      },
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'sans-serif'],
      },
    }
  },

  plugins: [],
}


