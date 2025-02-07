module.exports = {
  plugins: [require("tailwindcss-animated")],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          "mask-image": "linear-gradiente(black 50%, transparent)",
        },
      });
    },
  ],
};
