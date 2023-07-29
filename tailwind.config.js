// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#0a192f",
        white: "#e6f1ff",
        lightText: "#76797d",
        primary: {
          dark: "#0a192f",
          medium: "#112240",
          light: "#233554",
        },
        secondary: {
          dark: "#8892b0",
          medium: "#a8b2d1",
          light: "#ccd6f6",
        },
        background: "#e6f1ff",
        accent: "#64ffda",
      },
    },
  },
  plugins: [],
};
