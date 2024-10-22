/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
      primary: "hsl(220, 98%, 61%)",
      bg_gradient: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
      light:{
        light_grey: "hsl(0, 0%, 98%)",
        light_grayish_blue: "hsl(233, 11%, 84%)",
        very_light_grayish_blue: "hsl(236, 33%, 92%)",
        dark_grayish_blue: "hsl(236, 9%, 61%)",
        very_dark_grayish_blue: "hsl(235, 19%, 35%)"
      },
      dark:{
        dark_blue: "hsl(235, 21%, 11%)",
        dark_grayish_blue: "hsl(234, 11%, 52%)",
        very_dark_blue: "hsl(235, 24%, 19%)",
        light_grayish_blue: "hsl(234, 39%, 85%)",
        light_grayish_blue_hover: "hsl(236, 33%, 92%)",
        very_dark_grayish_blue_1: "hsl(233, 14%, 35%)",
        very_dark_grayish_blue_2: "hsl(237, 14%, 26%)"
      }
    },
    fontSize: {
      normal: '18px'
    }
  },
  },
  plugins: [],
}