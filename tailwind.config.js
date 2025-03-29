/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#d1dbe4",
        text: "#00202e",
        primary: "#194a7a",
        secondary: "#476f95",
        accent: "#7593af",
      },
      fontFamily: {
        mono: ["JetBrainsMono-Regular"],
      },
    },
  },
  plugins: [],
};
