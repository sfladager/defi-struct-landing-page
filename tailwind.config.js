/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary-dark': '#1DB7AC',
        'primary-mid': '#42E8DB',
        'primary-light': '#CDFCE7',
        'secondary-dark': '#0E1531',
        'secondary-mid': '#595C63',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
