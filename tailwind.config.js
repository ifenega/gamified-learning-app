/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        //gray
        "gray/25": "#FCFCFD",
        "gray/50": "#F9FAFB",
        "gray/100": "#F2F4F7",
        "gray/200": "#EAECF0",
        "gray/300": "#D0D5DD",
        "gray/400": "#98A2B3",
        "gray/500": "#667085",
        "gray/600": "#475467",
        "gray/700": "#344054",
        "gray/800": "#1D2939",
        "gray/900": "#101828",

        //teal
        "teal/25": "#F5FBFF",
        "teal/50": "#026AA2",
        "teal/100": "#E0F2FE",
        "teal/200": "#B9E6FE",
        "teal/300": "#7CD4FD",
        "teal/400": "#36BFFA",
        "teal/500": "#0BA5EC",
        "teal/600": "#0086C9",
        "teal/700": "#026AA2",
        "teal/800": "#065986",
        "teal/900": "#0B4A6F",



      },
      screens: {
        fold: "200px",
        fold: "300px",
      }
    },
  },
  plugins: [],
}

