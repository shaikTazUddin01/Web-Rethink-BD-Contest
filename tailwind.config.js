/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors:{
      primaryColor: "#2C8201" 
    }},
  },
  plugins: [require("daisyui")],
};
