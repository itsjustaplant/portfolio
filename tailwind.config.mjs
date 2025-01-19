/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      jet: "#333333",
      "battleship-gray": "#999999",
      "eerie-black": "#181818",
      "dark-eerie-black": "rgb(21,21,21)",
      silver: "#AAAAAA",
      green: "#74c69d",
      "off-white": "rgba(255, 255, 255, 0.1)"
    },
    extend: {
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px",
        lg: "20px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        light: "0px 0px 1px 1px rgba(170,170,170,0.6)",
        dark: "0px 0px 1px 1px rgba(66,66,66,0.6)",
        green: "0px 0px 34px -12px rgba(239,148,108,1)",
        "green-active": "0px 0px 30px -9px rgba(239,148,108,1)",
      },
      keyframes: {
        "skeleton-loading": {
          "0%": { "background-color": "rgba(111, 111, 111, 0.28)" },
          "100%": { "background-color": "rgba(111, 111, 111, 0.12)" },
        },
      },
      animation: {
        skeleton: "skeleton-loading 1s linear infinite alternate",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(273deg, #EF946C, #70877F)",
        pattern:
          "linear-gradient(rgb(27, 27, 27) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(to right, rgb(27, 27, 27) 1px, rgb(17, 17, 17) 1px)",
        overlay:
          "linear-gradient(180deg, rgba(24, 24, 24, 0.2) 0%, rgba(11, 11, 11, 0.8) 40%)",
      },
    },
  },
  plugins: [],
};
