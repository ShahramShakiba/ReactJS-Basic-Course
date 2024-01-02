/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // custom font
      fontFamily: {
        title: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
};

/* ['"Pacifico"']
-> the double quotes are only needed for this special font, which is imported from Google Fonts and added as a link in index.html

-> this is how it's required by Tailwind to work
*/
