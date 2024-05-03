/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
      fontFamily: {
        heading: "roboto"
        
      }
    },
    extend: {  }
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
