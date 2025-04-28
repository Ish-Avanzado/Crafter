/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
      },
      backgroundImage: {
        slideB1: "url(../dist/img/swiper-slide-1.jpg)",
        slideB2: "url(../dist/img/swiper-slide-2.jpg)",
      },
      colors: {
        primary: "#444141",
        dark: "#151515",
        light: "#ffffff",
        dilaw: "#ffd541",
        tgray: "#b8b8b8",
        gpink: "#f85293",
        gorange: "#fc9867",
        gpurple: "#535ddf",
        gblue: "#1dbede",
      },
    },
  },
  plugins: [],
};
