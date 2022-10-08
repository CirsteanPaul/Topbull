/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BackgroundMatrix from '../../../../components/background-matrix';
import RoadmapInformation from './components';
import { RoadMapData } from './constants';
import { RoadmapContainer, RoadmapInfoContainer, RoadmapTitle } from './styles';

const Roadmap = (): JSX.Element => {
  return (
    <RoadmapContainer>
      <RoadmapTitle>
        <BackgroundMatrix left="0" top="0" />
        Roadmap
      </RoadmapTitle>
      <RoadmapInfoContainer>
        {RoadMapData.map((data, idx) => (
          <RoadmapInformation key={data.title} index={idx} data={data} />
        ))}
      </RoadmapInfoContainer>
    </RoadmapContainer>
  );
};

export default Roadmap;
