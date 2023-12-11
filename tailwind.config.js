/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://tailwindcss.com/docs/content-configuration
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // https://tailwindcss.com/docs/theme
  theme: {
    screens: {
      tabletPortrait: "750px",
      tabletLandscape: "1000px",
      desktop: "1400px",
    },
    fontSize: {
      sm: ["1.4rem", "1.5em"],
      md: ["2rem", "1.35em"],
      lg: ["3rem", "1.15em"],
      xl: ["4rem", "1.15em"],
    },
    fontFamily: {
      heading: ["var(--font-lora)"],
      body: ["var(--font-inter)"],
    },
    extend: {
      spacing: {
        "card-sm": "1rem",
        "card-md": "2rem",
        "card-lg": "3rem",
        "container-phone": "30rem",
        "container-tablet-portrait": "80rem",
        "container-tablet-landscape": "100rem",
        "container-desktop": "130rem",
      },
      gridTemplateColumns: {
        24: "repeat(24, 1fr)",
      },
    },
  },
  // https://tailwindcss.com/docs/plugins
  plugins: [],
};
