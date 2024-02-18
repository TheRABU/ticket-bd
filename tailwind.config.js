/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      backgroundImage: {
        "coupon-image": "url('./images/Rectangle 8.png')",
      },
    },
  },
  plugins: [],
};
