import React from 'react';
import { BeImageLayoutLeft, BeImageLayoutRight, BeTextLeft } from './styles';
import IBubbleEdgeProps from './types';

const BubbleEdge = (props: IBubbleEdgeProps): JSX.Element => {
  const { title, isLeft } = props;
  if (isLeft) {
    return (
      <BeImageLayoutLeft style={{ backgroundImage: `url(/assets/bubble-left.png)` }}>
        <BeTextLeft>{title}</BeTextLeft>
      </BeImageLayoutLeft>
    );
  }
  return (
    <BeImageLayoutRight style={{ backgroundImage: `url(/assets/bubble-right.png)` }}>
      <BeTextLeft>{title}</BeTextLeft>
    </BeImageLayoutRight>
  );
};

export default BubbleEdge;
