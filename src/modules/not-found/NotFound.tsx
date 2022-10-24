import React from 'react';
import { NotFoundContainer, NotFoundMainText } from './styles';

const NotFound = (): JSX.Element => {
  return (
    <NotFoundContainer>
      <NotFoundMainText>Page not found</NotFoundMainText>
    </NotFoundContainer>
  );
};

export default NotFound;
