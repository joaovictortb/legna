import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        "2500": "2500ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        legna: {
          "50": "#eef3ff",
          "100": "#e0e8ff",
          "200": "#c6d4ff",
          "300": "#a4b6fd",
          "400": "#7f8ffa",
          "500": "#575ff2",
          "600": "#4844e7",
          "700": "#3c36cc",
          "800": "#322fa4",
          "900": "#2d2d82",
          "950": "#1b1a4c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
