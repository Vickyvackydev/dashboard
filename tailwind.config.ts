// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         sm: "640px",
//         // => @media (min-width: 640px) { ... }

//         md: "768px",
//         // => @media (min-width: 768px) { ... }

//         lg: "1024px",
//         // => @media (min-width: 1024px) { ... }

//         xl: "1280px",
//         // => @media (min-width: 1280px) { ... }

//         "2xl": "1536px",
//         // => @media (min-width: 1536px) { ... }
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: ["@tailwindcss/transition"],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light_blue: "#EBECF2",
        lighter_blue: "#F7F8FA",
        active_mode: "#34CAA5",
        backgrd: "#FAFAFA",
        text_black: "#26282C",
        text_gray: "#3A3F51",
        email_text: "#787486",
        search_text: "#A3A3A3",
        text_green: "#34CAA5",
        border_color: "#EDF2F7",
        text_dark_gray: "#9CA4AB",
        text_error: "#ED544E",
        rgb_red: "rgba(237, 84, 78, 0.12)",
        rgb_green: "rgba(52, 202, 165, 0.12)",
        neutral: "#525252",
        border_bg: "#0D062D",
      },
      screens: {
        xs: "400px",
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
