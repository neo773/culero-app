/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      cyan: "#A1C0FF",
      blue: "#1E68FF",
      white: "#FFFFFF",
      gray: "#F0F0F0",
    },
    extend: {
      borderRadius: {
        sm: "5px",
      },
    },
  },
  plugins: [],
};
