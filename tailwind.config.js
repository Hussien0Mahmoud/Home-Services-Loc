/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'test': "url('/vite.svg')",
        // 'test': "url('./src/assets/react.svg')",
        'footer-texture': "url('/another-image.png')",
        'worker1': "url('./src/assets/About/worker1.jpg')",
        'servicesHeaderBG': "url('./src/assets/services/services-header-bg.png')",
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
