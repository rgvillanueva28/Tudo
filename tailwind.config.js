/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: "Ubuntu",
        },
        colors: {
          brand: {
            main: "#96b3dd",
            light: "#a2b2cb",
            dark: "#4176e8",
          },
          accent: {
            light: "#f5f4f5",
            dark: "#9499a2",
          },
          info: "#4176e8",
          success: "#62b07a",
          warning: "#e0a042",
          danger: "#f44336",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  