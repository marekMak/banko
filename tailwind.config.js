/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5CE1E6',
        secondary:'#46CCD9',
        baseBG:'#00030D',
        cardDark:'#151320',
        cardLight:'#403f46',
        firebrick:'rgba(255, 36, 189,0.15)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}