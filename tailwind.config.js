/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgBlack': '#1A1E29',
      }
    },
  },
  plugins: [],
}

