export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cl-StrongCyan': 'hsl(171, 66%, 44%)',
        'cl-StrongCyan2': 'hsl(171, 66%, 44%, .5)',
        'cl-LightBlue': 'hsl(233, 100%, 69%)',
        'cl-LightBlue2': 'hsl(233, 100%, 69%, .5)',
        'cl-DarkGrayishBlue': 'hsl(210, 10%, 33%)',
        'cl-GrayishBlue': 'hsl(201, 11%, 66%)'
      },
      fontFamily: {
        'bai': ["Bai Jamjuree"]
      },
      backgroundImage: {
        'hero-mobile': "url('/bg-header-mobile.png')",
        'hero-desktop': "url('/bg-header-desktop.png')",
      }
    },
  },
  plugins: [],
}