/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*js"],
  theme: {
    screens: {
      md: '768px',
      lg: '1025px', 
      xl: '1801px', 
    },
    extend: {
      width: {
        22: '5.5rem',
      },
      spacing: {
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
      },
      boxShadow: {
        '01': '0px 4px 14px rgba(0, 0, 0, 0.2)',
        '02': '0px 4px 11px rgba(0, 0, 0, 0.25)',
      },
    },
    container: () => ({
      center: true,
    }),
    fontFamily: {
      montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      quicksand: ['Quicksand']
    },
    fontSize: {
      'heading-01': [
        '3.125rem', // 50px
        {
          lineHeight: '3.80rem', // 60.95px
        },
      ],
      'heading-02': [
        '2.5rem', // 40px
        {
          lineHeight: '3.047rem', // 48.76px
        },
      ],
      'heading-03': [
        '2.062rem', // 33px
        {
          lineHeight: '2.562rem', // 41px
        },
      ],
      'heading-04': [
        '1.875rem', // 30px
        {
          lineHeight: '2.285rem', // 36.57px
        },
      ],
      'heading-05': [
        '1.687rem', // 27px
        {
          lineHeight: '2.062rem', // 33px
        },
      ],
      'subheading-01': [
        '1.375rem', // 22px
        {
          lineHeight: '1.676rem', // 26.82px
        },
      ],
      'subheading-02': [
        '1.25rem', // 20px
        {
          lineHeight: '1.523rem', // 24.38px
        },
      ],
      'subheading-03': [
        '1.125rem', // 18px
        {
          lineHeight: '1.371rem', // 21.94px
        },
      ],
      'paragraph-01': [
        '1rem', // 16px
        {
          lineHeight: '1.272rem', // 20.35px
        },
      ],
      'paragraph-02': [
        '0.938rem', // 15px
        {
          lineHeight: '1.143rem', // 18.29px
        },
      ],
      'paragraph-03': [
        '0.813rem', // 13px
        {
          lineHeight: '0.952rem', // 15.23px
        },
      ],
      'paragraph-04': [
        '0.75rem', // 12px
        {
          lineHeight: '0.952rem', // 15.23px
        },
      ],
      'paragraph-05': [
        '0.625rem', // 10px
        {
          lineHeight: '0.952rem', // 15.23px
        },
      ],
    },
    colors: {
      red: '#FF5A5A',

        primary: '#E86060',
        secondary: '#662323',
        lighRed: '#FF7676',
        gray: '#828282',
        softGray: '#BDBDBD',

        white: '#FFFFFF',
        black: '#000000',
      transparent: 'transparent',
    },
  },
  plugins: [],
}


