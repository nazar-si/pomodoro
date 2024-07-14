/** @type {import('tailwindcss').Config} */
import tremor from './tremor.config';
import ui from '@headlessui/tailwindcss';
import stroke from '@designbycode/tailwindcss-text-stroke';
import selection from 'tailwindcss-selection-variant';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      // tremor - charts ui library
      colors: {
        tremor: tremor['light-tremor'],
        'dark-tremor': tremor['dark-tremor'],
      },
      boxShadow: {
        ...tremor.boxShadow,
      },
      borderRadius: {
        ...tremor.borderRadius,
      },
      fontSize: {
        ...tremor.fontSize,
      },
      fontFamily: {
        mono: '"Source Code Pro", monospace',
        sans: '"Ubuntu", sans-serif',
      },
      textColor: ['selection'],
      backgroundColor: ['selection'],
    },
  },
  safelist: tremor.safelist,
  plugins: [ui, stroke, selection],
};
