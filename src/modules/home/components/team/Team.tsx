/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { teamData } from './constants';
import { TeamContainer, TeamContainerCards, TeamTitle } from './styles';
import TeamCard from './team-card';

const Team = (): JSX.Element => {
  return (
    <TeamContainer>
      <TeamTitle>Team</TeamTitle>
      <TeamContainerCards>
        {teamData.map(item => (
          <TeamCard key={item.title} {...item} />
        ))}
      </TeamContainerCards>
    </TeamContainer>
  );
};

export default Team;
