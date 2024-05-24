import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: "#EE4C4C",
      orange: "#FC9F00",
      green: "#41D77D",
      white: "#fff",
      grey: {
        300: "#273340",
        500: "#616978",
        700: "#efefef",
        900: "#f8f8f8",
      },
    },
    screens: {
      sm: "430px",
      md: "900px",
      lg: "1180px",
    },
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
