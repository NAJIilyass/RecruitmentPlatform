/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "achmi-primary": "#038897",
        "achmi-secondary": "#00449F",
        "achmi-secondaryy": "rgba(00,75,250,1)",
        "achmi-tertiary": {
          100: "#B1E4E3",
          200: "#185E66",
        },
        "achmi-back": "#EDEDED",
        "achmi-font": "#004851",
        "achmi-login": "rgba(03,136,151,0.5)"
      },
      fontFamily:{
        montserrat: ["Montserrat"],
        italiano: ["Dancing Script"],
        montagu: ["Montagu Slab"]
      },
      borderWidth:{
        1.5: '1px',
        3: '3.5px',
        20: '20.57px',
        23: '24px',
      },
      height:{
        2023: '0.150rem',
        2022: '0.05rem',
        62: '251px',
        120: '479px'
      },
      width: {
        120: '29rem',
      },
      margin: {
        100: '30.75rem',
      }
    },
  },
  plugins: [],
}

