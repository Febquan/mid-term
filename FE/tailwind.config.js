// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  // ...
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    keyframes: {
      onoff: {
        "0%, 100%": { opacity: 0 },
        "50%": { opacity: 1 },
      },
    },
    animation: {
      onoffLine: "onoff 1s ease-in-out infinite",
    },
  },
};
export const darkMode = "class";
export const plugins = [
  nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#4349E6",
            foreground: "#fff",
          },
          color: "#fff",
          focus: "#4349E6",
          background: "#010420",
          foreground: "#fff",
        },
      },
    },
  }),
];
