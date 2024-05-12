/** @type {import('tailwindcss').Config} */
import {card} from './plugins/card_component'
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,cjs,mjs,php,ejs,hbs,py}'],
  theme: {
    screens: {
      mobile: "374px",
      mobile_plus: "480px",
      tablet: "640px",
      laptop_mini: "768px",
      laptop: "1024px",
      desktop: "1280px",
      desktop_plus: "1700px",
    },
    tabSize: {
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    }
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
      require('tailwindcss-children'),
      require('@tailwindcss/container-queries'),
      plugin(function({ addUtilities, addComponents, e, config}) {
        card
      }
    ),
  ],
    }
  }
