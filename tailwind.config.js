/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend:{
      colors:{
        very_dark_magenta:'hsl(300, 43%, 22%)',
        soft_pink:'hsl(333, 80%, 67%)',
        dark_grayish_magenta:'hsl(303, 10%, 53%)',
        light_grayish_magenta:'hsl(300, 24%, 96%)'
      },
      fontFamily:{
        spartan:['League Spartan']
      },
      fontSize:{
        paragraph:'15px',
        title:'3.375rem'
      },
      fontWeight:{
        light:'400',
        normal:'500',
        bold:'700'
      },
      translate:{
        x_m3:'translateX(-3rem)'
      },
      maxWidth:{
        card:'70rem'
      },
      gridColumn:{
        format:'auto 1fr'
      }
    }
  },
  plugins: [],
}
