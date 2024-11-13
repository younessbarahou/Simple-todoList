/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
      primary: "hsl(220, 98%, 61%)",
      gradient: "linear-gradient from hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
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
      normal: '18px',
      small: '14px'
    }},
    textColor: {
      black: 'black',
      white : 'white',
      grey: 'hsl(236, 9%, 61%)',
      blue: 'rgb(59 130 246)',
      red: '#ed4747',
      ddd: 'hsl(233, 14%, 35%)'

    },
    width: {
      med: '98%',
      comp: '85%',
      full : '100%'
    },
    screens: {
      'sm': '520px',
      // ssm is a special screen width for the background images
      'ssm' : '376px'
    },
    backgroundImage:{
      light_mobile: 'url(./assets/bg-mobile-light.jpg)',
      light_desktop: 'url(./assets/bg-desktop-light.jpg)',
      dark_mobile: 'url(./assets/bg-mobile-dark.jpg)',
      dark_desktop: 'url(./assets/bg-desktop-dark.jpg)'
    },
    borderColor:{
      grey: "hsl(236, 33%, 92%)",
      dark: 'hsl(237, 14%, 26%)'
    },
    animation: {
            'text':'text 5s ease infinite',
        },
        keyframes: {
            'text': {
                '0%, 100%': {
                   'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
        },
    borderWidth:{
      sm: "1px"
    },  
  },
  plugins: [],
}

