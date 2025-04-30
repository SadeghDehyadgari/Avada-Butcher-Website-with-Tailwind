// tailwind.config.js
export default {
  theme: {
    extend: {
      screens: {
        "max-md": { max: "768px" }, // 🛠️ Add your custom max-width media query
        // You can add others too if you want, like:
        "max-sm": { max: "425px" },
        "max-ss": { max: "320px" },
        "max-lg": { max: "1024px" },
      },
    },
  },
  plugins: [],
};
