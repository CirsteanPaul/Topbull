import styled from '../../theme';
import bannerGif from './banner-gif.gif';

export const NotFoundContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bannerGif});
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    background-attachment: initial;
  }
`;
export const NotFoundMainText = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.gigant};
  font-weight: ${props => props.theme.fonts.bold};
`;
