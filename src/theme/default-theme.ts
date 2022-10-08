import ITheme from '../types/ITheme';

const defaultTheme: ITheme = {
  colors: {
    primary: '#DF4D4D',
    accent: '#1E2D4A',
    textWhite: '#FBFDFF',
    background: '#181818',
    black: '#000000',
    lightRed: '#FFE1E1',
    mediumRed: '#FAACAC',
    backgroundBlue: '#6a6d9e1a',
    darkRed: '#812F2F',
    white: '#fff',
  },
  fonts: {
    normal: 'Outfit',
    regular: 'Outfit Regular',
    bold: 'Outfit Bold',
    light: 'Outfit Light',
  },
  fontSize: {
    medium: '22px',
    xxLarge: '46px',
    large: '30px',
    xLarge: '38px',
    small: '18px',
    xSmall: '10px',
  },
};
export default defaultTheme;
