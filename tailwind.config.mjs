/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        primary: "#FFFFFF",
        secondary: "#AAAAAA",
      },
      backgroundColor: {
        primary: "#333333",
        secondary: "#151515",
        tertiary: "#252525",
        "tertiary-30": "#25252566",
        neutral: "#FFF7D6"
      },
      borderColor: {
        primary: "#FFFFFF1A",
      },
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
        primary: "0px 0px 1px 1px rgba(170,170,170,0.6)",
        secondary: "0px 0px 1px 1px rgba(66,66,66,0.6)",
      },
      backgroundImage: {
        boxes:
          "linear-gradient(rgb(27, 27, 27) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(to right, rgb(27, 27, 27) 1px, rgb(17, 17, 17) 1px)",
        overlay:
          "linear-gradient(180deg, rgba(24, 24, 24, 0.2) 0%, rgba(11, 11, 11, 0.75) 25%)",
      },
    },
  },
  plugins: [],
};
