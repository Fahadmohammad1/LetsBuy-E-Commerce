/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF4E16",
          secondary: "#C70D3A",
          accent: "#512C62",
          neutral: "#45969B",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
