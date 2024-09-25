/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c19f5f",
        primary1: "#c19f5f",
        gray: "#2d2627",
        black: "#0f0e0f",
        red: "#D12323",
        yellow: "#e2b239",
        green: "#4d8b55",
      },
      fontFamily: {
        mulish: "Mulish",
        cor: "Cormorant",
        cor2: "Cormorant Upright",
        dance: "Dancing Script",
      },
    },
  },
  plugins: [],
};
