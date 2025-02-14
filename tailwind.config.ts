import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//           geo: ['Geo', 'sans-serif'],
//           orbitron: ['Orbitron','sans-serif']
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//     keyframes: {
//       scroll: {
//         '0%': { transform: 'translateX(0)' },
//         '100%': { transform: 'translateX(-100%)' },
//       },
//     },
//     animation: {
//       scroll: 'scroll 60s linear infinite',
//     },
//   },
//   plugins: [require('@tailwindcss/forms')],
// } satisfies Config;



module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          geo: ['Geo', 'sans-serif'],
          orbitron: ['Orbitron','sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      scroll: 'scroll 60s linear infinite',
    },
  },
  plugins: [require('@tailwindcss/forms')],
});



// theme: {
//   extend: {
//     fontFamily: {
//       geo: ['Geo', 'sans-serif'],
//       orbitron: ['Orbitron','sans-serif']
//     },
//     keyframes: {
//       scroll: {
//         '0%': { transform: 'translateX(0)' },
//         '100%': { transform: 'translateX(-100%)' },
//       },
//     },
//     animation: {
//       scroll: 'scroll 60s linear infinite',
//     },
//     colors: {
//       customGray: '#BEBEBE', // Add the custom color
//     },
// },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
