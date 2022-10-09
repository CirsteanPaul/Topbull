import React from 'react';
import BubbleEdge from '../../../../../components/bubble-edge';
import { Alignment, RoadMapInfo } from '../constants';
import { RiContainer, RiText, RiTitle } from './styles';

interface IRoadmapInformationProps {
  data: RoadMapInfo;
  index: number;
}
const RoadmapInformation = (props: IRoadmapInformationProps): JSX.Element => {
  const { data } = props;
  const { title, text, align } = data;
  const { index } = props;
  const buildBubble = () => {
    if (align === Alignment.right) {
      return <BubbleEdge title={`Q${index + 1}`} />;
    }
    return <BubbleEdge title={`Q${index + 1}`} isLeft />;
  };
  return (
    <RiContainer isRight={align === Alignment.right}>
      {buildBubble()}
      <RiTitle>{title}</RiTitle>
      <RiText>{text}</RiText>
    </RiContainer>
  );
};

export default RoadmapInformation;
