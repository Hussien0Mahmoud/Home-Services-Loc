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
        'servicesHeaderBG': "url('/services/services-header-bg.png')",
        'singleService2': "url('/services/singleService2.png')",
        // contact1 from puplbic folder
        'contact1BG': "url('/contact/contact1.jpg')",
        'contact2BG': "url('/contact/contact2.jpg')",



      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
