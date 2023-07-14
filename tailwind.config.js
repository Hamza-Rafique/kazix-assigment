/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FBFF20",
      secondary_dark_200: "#0F2757",
      secondary_dark_400: "#0C1F45",
      secondary_dark_500: "#0B1B3D",
      secondary_dark_50: "#13316C",
      secondary_dark_800:"#050E1E",
      secondary_dark_950: "#030811",
      secondary_light_950: "#7E8DA9",
      white:'#fff'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      blur: {
        xs: '2px',
      }
    },
    
  },
  plugins: [],
};
