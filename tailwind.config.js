/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: "url('https://wallpapercave.com/wp/wp9353619.jpg')",
      },
      backgroundPosition: {
        bannerPosition: "53% 0px 50%",
      }
    },
  },
  plugins: [],
}

