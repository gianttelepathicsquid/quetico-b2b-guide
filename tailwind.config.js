/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quetico-blue': '#00204E',
        'quetico-sky': '#40B4FF',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}
