module.exports = {
  content: [
    "./*.php",
    "./*.html",
    "./**/*.js",
    // Add any other paths where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
