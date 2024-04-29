/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#08AB70",
      "light-green": "#2BE6A2",
      white: "#fff",
      gray: "#D9D9D9",
      "pinkish-gray": "#948888",
      "dark-gray": "#212121",
      background: "#f2f2f2",
      dark: "#0F172A",
      
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      "3xl": "2rem", //32px
      "2xl": "1.5rem", //24px
      xl: "1.5rem", //22px
      lg: "1.25rem", //20px
      md: "1.125rem", //18px
      base: "1rem", //16px
      sm: "0.875rem", //14px
    },
    extend: {
      screens: {
        "2xs": "28rem", //448px
        xs: "33.75rem", //540px
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
