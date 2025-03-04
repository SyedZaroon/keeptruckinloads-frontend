/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // screens: {
    //   mobiles: "320px",
    //   mobilem: "375px",
    //   mobilel: "425px",
    //   tablet: "768px",
    //   laptop: "1024px",
    //   laptopl: "1440px",
    // },

    fontFamily: {
      heading: ["Lato", "sans-serif"],
      text: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
