import React from 'react';
import ExclusiveBanner from './exclusive-banner';
import { ExclusiveBubble, ExclusiveBubblesWrapper, ExclusiveContainer, ExclusiveTextTitle, ExclusiveTextWrapper } from './styles';

const Exclusive = () => {
  return (
    <ExclusiveContainer>
      <ExclusiveTextWrapper>
        <ExclusiveTextTitle>AN exclusive quality tool for finding the next bulls.</ExclusiveTextTitle>
        <ExclusiveTextTitle isHighlighted>a tool to end all tools!</ExclusiveTextTitle>
      </ExclusiveTextWrapper>
      <ExclusiveBubblesWrapper>
        <ExclusiveBubble />
        <ExclusiveBubble />
        <ExclusiveBubble />
      </ExclusiveBubblesWrapper>
      <ExclusiveBanner />
    </ExclusiveContainer>
  );
};

export default Exclusive;
