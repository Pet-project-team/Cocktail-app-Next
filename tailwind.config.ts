import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'calc-close': 'calc(100vh - 64px)',
      },
      width: {
        'calc-20': 'calc(20% - 24px)',
      },
      boxShadow: {
        'def-md': '0px 2px 8px 0px #e7e7e7',
      },
      colors: {
        slate: colors.slate,
        main: {
          '50': '#edf7ff',
          '100': '#d7ebff',
          '200': '#b9deff',
          '300': '#88caff',
          '400': '#50acff',
          '500': '#2889ff',
          '600': '#0a64ff',
          '700': '#0a51eb',
          '800': '#0f41be',
          '900': '#133c95',
          '950': '#11265a',
        },
        'main-gray': {
          '50': '#f5f5f5',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'primary-text': 'rgba(0, 0, 0, 0.85)',
      },
    },
  },
  plugins: [],
};
export default config;
