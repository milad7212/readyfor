/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ciBackground: "#282a36",
        ciBackgroundTwo: "#383A59",
        ciCurrentLine: "#44475a",
        ciForeground: "#f8f8f2",
        ciComment: "#6272a4",
        ciCyan: "#8be9fd",
        ciGreen: "#50fa7b",
        ciOrange: "#ffb86c",
        ciPink: "#ff79c6",
        ciPurple: "#bd93f9",
        ciRed: "#ff5555",
        ciYellow: "#f1fa8c",
        ciTiter: "#BCC2CD",
        ciDribble: "#EB5389",
        ciGrayText: "#717f94",
        ciPurple: "#081A51",
        ciLightWhite: "rgba(255,255,255,0.17)",
        ciYellow:'#f8e367'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
