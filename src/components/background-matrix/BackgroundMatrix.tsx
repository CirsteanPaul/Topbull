import React from 'react';
import { BmBox, BmContainer } from './styles';
import IBackgroundMatrixProps from './types';

const BackgroundMatrix = (props: IBackgroundMatrixProps): JSX.Element => {
  const { top, bottom, left, right, scaled } = props;
  const numberOfBoxes = 36;

  return (
    <BmContainer top={top} bottom={bottom} left={left} right={right}>
      {Array(numberOfBoxes).fill(<BmBox scaled={scaled} />)}
    </BmContainer>
  );
};

export default BackgroundMatrix;
