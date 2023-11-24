/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#283618",
        brownColor: "#BC6C25", 
        creamColor: "#DDA15E",
        greenColor: '#606C38',
        headingColor: "#181A1E",
        textColor: "#27292e",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

