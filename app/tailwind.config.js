/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        "inter-thin": ["Inter_100Thin", "Inter", "system-ui", "sans-serif"],
        "inter-extra-light": [
          "Inter_200ExtraLight",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        "inter-light": ["Inter_300Light", "Inter", "system-ui", "sans-serif"],
        "inter-normal": ["Inter_400Normal", "Inter", "system-ui", "sans-serif"],
        "inter-medium": ["Inter_500Medium", "Inter", "system-ui", "sans-serif"],
        "inter-semi-bold": [
          "Inter_600SemiBold",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        "inter-bold": ["Inter_700Bold", "Inter", "system-ui", "sans-serif"],
        "inter-extra-bold": [
          "Inter_800ExtraBold",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        "inter-black": ["Inter_900Black", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
