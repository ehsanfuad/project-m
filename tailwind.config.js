/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["iransans"],
        iransansLight: ["iransansLight"],
        iransansUltraLight: ["iransansUltraLight"],
        iransansMedium: ["iransansMedium"],
        iransansBold: ["iransansBold"],
        iransansBlack: ["iransansBlack"],
        vazir: ["vazir"],
        vazirn: ["vazirn"],
      },
    },
  },
  plugins: [],
};
