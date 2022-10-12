import React from 'react';
import { LifeTimeMobileCard } from '../constants';
import { LtmContainer, LtmInfo, LtmTitle } from './styles';

const LtmCard = (props: LifeTimeMobileCard): JSX.Element => {
  const { title, data } = props;
  return (
    <LtmContainer>
      <LtmTitle>{title}</LtmTitle>
      <hr />
      {data.map(elem => {
        return (
          <LtmInfo key={elem.title} isRed={elem.isRed}>
            {elem.title}
          </LtmInfo>
        );
      })}
    </LtmContainer>
  );
};

export default LtmCard;
