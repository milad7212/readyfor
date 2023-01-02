/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#EAF5FE',
        secondaryDark:'#252F3F',
        PrimaryText:'#46C9FC',
        SecondaryText:'#4B5563',
        normalText:'#4B565D',
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
