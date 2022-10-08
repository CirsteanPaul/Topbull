type colors = {
  primary: string;
  accent: string;
  background: string;
  black: string;
  lightRed: string;
  mediumRed: string;
  backgroundBlue: string;
  darkRed: string;
  textWhite: string;
  white: string;
};
type fontSize = {
  medium: string;
  xLarge: string;
  xSmall: string;
  small: string;
  large: string;
  xxLarge: string;
};
type fonts = {
  normal: string;
  regular: string;
  bold: string;
  light: string;
};

interface ITheme {
  colors: colors;
  fontSize: fontSize;
  fonts: fonts;
}
export default ITheme;
