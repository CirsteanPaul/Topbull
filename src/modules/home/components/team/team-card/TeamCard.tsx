import React from 'react';
import { ITeamData } from '../constants';
import { TeamCardContainer, TeamCardImage, TeamCardInfoContainer, TeamCardInfoText, TeamCardInfoTitle } from './styles';

const TeamCard = (props: ITeamData): JSX.Element => {
  const { title, info, image } = props;
  return (
    <TeamCardContainer>
      <TeamCardImage src={image} />
      <TeamCardInfoContainer>
        <TeamCardInfoTitle>{title}</TeamCardInfoTitle>
        <TeamCardInfoText>{info}</TeamCardInfoText>
      </TeamCardInfoContainer>
    </TeamCardContainer>
  );
};

export default TeamCard;
