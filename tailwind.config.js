module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
        'custom' : ['SF', 'sans']
    },
    extend: {
     colors: {
      mywhite: '#FEFEFE',
      myblue: '#AFC7EF',
      myblue2: '#4B75BE',
      mysecondary: '#86868B',
      myblack: '#070D18',
      mygrey: '#F0F0F0',
      mypurple: '#EEECF4',
      mybg: '#E5E6E7'
    },
    spacing: {
      'margin': '102px',
      'gutter': '1.25rem'
    },
     screens: {
       smallest: '290px',
       iphone: '370px'
     },
     lineHeight: {
       '40': '3rem'
     }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
