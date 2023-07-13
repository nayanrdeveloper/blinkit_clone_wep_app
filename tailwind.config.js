/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
  theme: {
    extend: {
      boxShadow: {
        card: "rgb(0 0 0 / 4%) 2px 2px 8px",
      },
    },
  },
};
