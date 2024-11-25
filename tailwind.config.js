/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-grid-pattern': {
          maskImage: 'linear-gradient(to right, #0c0a09 1px, transparent 1px), linear-gradient(to bottom, #0c0a09 1px, transparent 1px)',
          WebkitMaskImage: 'linear-gradient(to right, #0c0a09 1px, transparent 1px), linear-gradient(to bottom, #0c0a09 1px, transparent 1px)',
          maskSize: '2.5rem 2.5rem',
          WebkitMaskSize: '2.5rem 2.5rem',
          maskPosition: 'center center',
          WebkitMaskPosition: 'center center',
        },
      });
    },
  ],
}

