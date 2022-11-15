/** @type {import('tailwindcss').Config} */
//const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#070724",
        "gray-dark": "#38384F",
        gray: "#838391",
        "blue-light": "#419EBB",
        yellow: "#EDA249",
        purple: "#6F2ED6",
        "orange-100": "#CD5120",
        "orange-200": "#D14C32",
        "orange-300": "#D83A3A",
        green: "#1EC1A2",
        blue: "#2D68F0",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        spartan: ["Spartan", "sans-serif"],
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

