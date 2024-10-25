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
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [require("daisyui")],
  darkMode: ["class"],
};
