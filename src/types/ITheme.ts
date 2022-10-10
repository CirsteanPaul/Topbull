type colors = {
  primary: string;
  accent: string;
  background: string;
  black: string;
  lightRed: string;
  mediumRed: string;
  backgroundBlue: string;
  darkRed: string;
  gray: string;
  textWhite: string;
  white: string;
};
type fontSize = {
  medium: string;
  xLarge: string;
  xSmall: string;
  small: string;
  mSmall: string;
  large: string;
  xxLarge: string;
  gigant: string;
  xGigant: string;
};
type fonts = {
  normal: string;
  roboto: string;
  regular: string;
  aldrich: string;
  bold: string;
  extraBold: string;
  light: string;
};

interface ITheme {
  colors: colors;
  fontSize: fontSize;
  fonts: fonts;
}
export default ITheme;
