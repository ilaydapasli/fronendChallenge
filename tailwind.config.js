/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {},
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4731D3", // Örnek bir mor
        secondary: "#CBF281", // Örnek bir yeşil
        darkprimary: "#171043", // Örnek bir yeşil tonu
        darksecondary: "#1A210B", // Örnek bir gri tonu
        darkgrey: "##2B2727",
        buttonColor: "#3730A3",
      },
    },
  },
  plugins: [],
};
