module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
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
    ],
  },
  plugins: [require("daisyui")],
};
