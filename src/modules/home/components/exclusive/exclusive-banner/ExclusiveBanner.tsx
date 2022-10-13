/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BackgroundMatrix from '../../../../../components/background-matrix';
import exclusiveCards from './constants';
import EbCard from './exclusive-banner-card';
import { EbCardsContainer, EbContainer, EbText, EbTextSection, EbTitle } from './styles';

const ExclusiveBanner = (): JSX.Element => {
  return (
    <EbContainer>
      <BackgroundMatrix scaled top="20px" left="10px" />
      <BackgroundMatrix scaled top="80px" left="150px" />
      <BackgroundMatrix scaled top="40px" right="10px" />
      <BackgroundMatrix scaled top="100px" right="150px" />
      <EbTextSection>
        <EbText>we are proud to announce</EbText>
        <EbTitle>the best. ever.</EbTitle>
        <EbText>blockchain Start up platform</EbText>
      </EbTextSection>
      <EbCardsContainer>
        {exclusiveCards.map(card => (
          <EbCard key={card.title} {...card} />
        ))}
      </EbCardsContainer>
    </EbContainer>
  );
};

export default ExclusiveBanner;
