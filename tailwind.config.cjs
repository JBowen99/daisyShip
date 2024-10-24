module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        title: "3rem", // Customize as needed (e.g., 36px)
        subtitle: "2rem",
        text: "1.2rem", // Customize as needed (e.g., 16px)
        infotext: "1rem", // Customize as needed (e.g., 14px)
        buttontext: "1rem",
      },
      fontWeight: {
        title: "700", // Bold font for title
        subtitle: "500",
        text: "400", // Regular font weight for text
        infotext: "300", // Light font for infotext
        buttontext: "400",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "cyberpunk",
      "cmyk",
      "luxury",
      "lemonade",
      "night",
      "coffee",
      "dim",
      "pastel",
      "synthwave",
      "sunset",
      "bumblebee",
      "forest",
      "retro",
    ],
  },
  plugins: [require("daisyui")],
};
