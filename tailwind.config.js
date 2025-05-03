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
        dotbg: "url(../dist/img/dot-bg.png)",
        graybg: "url(../dist/img/graybg.png)",
        graybg2: "url(../dist/img/graybg2.png)",
        blackOverlay:
          "linear-gradient(to bottom, rgba(225,225,225,225) 0%, rgba(225,225,225,0.9) 100%)",
      },
      colors: {
        primary: "#444141",
        dark: "#151515",
        light: "#ffffff",
        dilaw: "#ffd541",
        bggray: "#f5f5f5",
        tgray: "#b8b8b8",
        gpink: "#f85293",
        gorange: "#fc9867",
        gpurple: "#535ddf",
        gblue: "#1dbede",
        ggreen: "#14c18d",
      },
      clipPath: {
        customPolygon: "polygon(6% 0, 100% 0, 100% 100%, 0 99%, 0 5%)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};

// npm install tailwind-clip-path to add the clip-path
