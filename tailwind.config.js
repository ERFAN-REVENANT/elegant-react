/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        secondary: "#1c1c1c",
        primary: "#000000",
      },
      fontFamily: {
        "lufga-regular": ["Lufga Regular", "sans-serif"],

        "lufga-thin": ["Lufga Thin", "sans-serif"],

        "lufga-extralight": ["Lufga ExtraLight", "sans-serif"],

        "lufga-light": ["Lufga Light", "sans-serif"],

        "lufga-medium": ["Lufga Medium", "sans-serif"],

        "lufga-semibold": ["Lufga SemiBold", "sans-serif"],

        "lufga-bold": ["Lufga Bold", "sans-serif"],

        "lufga-extrabold": ["Lufga ExtraBold", "sans-serif"],

        "lufga-black": ["Lufga Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
