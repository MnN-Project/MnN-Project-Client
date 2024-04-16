/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#2BE6A2",
      'light-green': '#08AB70',
      white: '#fff',
    },
    fontSize: {
      xl: "24px",
      lg: "20px",
      md: "18px",
      base: "16px",
      sm: "14px",
    },
    extend: {},
  },
  plugins: [],
};
