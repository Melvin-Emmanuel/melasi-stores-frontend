/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Trebuchet MS"', "sans-serif"],
      },
      colors: {
        primary: '#0567ab',
        secondary: '#fff',
        background: '#fff', // Light gray
        textPrimary: '#111827', // Almost Black
        textSecondary: '#4B5563', // Dark Gray
        error: '#EF4444', // Red
        success: '#10B981', // Green
        hovers: "#88cdf6"
      },
    },
  },
  plugins: [],
})


// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2364AA",
//         secondary: "#2363AA",
//         lightBlue: "#3DA5D9",
//         lightGreen: "#73BF88",
//         yellow: "#FEC601",
//       },
//       fontFamily: {
//         montserrat: ["Montserrat", "sans-serif"],
//       },
//     },
//     screens: {
//       sm: { min: "300px", max: "767px" },
//       md: { min: "768px", max: "1023px" },
//       lg: { min: "1024px" },
//       // Re-enable xl and 2xl if needed
//       // xl: { min: "1280px", max: "1535px" },
//       // "2xl": { min: "1536px" },
//     },
//   },
//   plugins: [],
// });
