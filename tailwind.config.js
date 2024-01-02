/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: `640px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1280px`,
      "2xl": `1366px`,
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0.625rem",
        },
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        Morabba_bold: "Morabba Bold",
      },
      colors: {
        grayTheme: "#1c1c28",
        baseColor: "#2ED573",
        secondaryLight: "#4e81fb66",
        secondary:"#4e81fb",
        navColor : "#32334D",
      },
      boxShadow:{
        "light" :"0 1px 60px rgba(0,0,0,5%)"
      },
      spacing:{
        "25": "6.25rem"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(`child`, `&>*`);
      addVariant(`child-hover`, `&>*:hover`);
    },
  ],
};
