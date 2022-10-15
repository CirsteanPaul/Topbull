import React, { useState } from 'react';
import { faqData, IFaqData } from './constants';
import './styles.css';
import {
  FaqCard,
  FaqCardButton,
  FaqCardHeader,
  FaqCardText,
  FaqCardTitle,
  FaqContainer,
  FaqData,
  FaqImage,
  FaqLine,
  FaqSectionLine,
  FaqSectionTitle,
  FaqTitle,
  FaqWrapper,
} from './styles';

const Faq = (): JSX.Element => {
  const [isActive, setIsActive] = useState(0);
  const [lastPresssed, setLastPressed] = useState(0);
  const buildFaqCard = (item: IFaqData, index: number): JSX.Element => {
    const handleClick = () => {
      if (index === isActive) {
        setIsActive(-1);
      } else {
        setIsActive(index);
      }
      setLastPressed(index);
    };
    return (
      <FaqCard key={index}>
        <FaqCardHeader onClick={handleClick}>
          <FaqCardTitle isHighlighted={lastPresssed === index}>{item.title}</FaqCardTitle>
          <button className="faq-toggle" type="button">
            <span className={`${isActive === index ? 'expanded' : ''} ${lastPresssed === index ? 'highlight' : ''}`} />
            <span className={`${isActive === index ? 'expanded' : ''} ${lastPresssed === index ? 'highlight' : ''}`} />
          </button>
        </FaqCardHeader>
        <FaqCardText isActive={isActive === index}>{item.data}</FaqCardText>
        <FaqSectionLine marginTop />
      </FaqCard>
    );
  };
  return (
    <FaqContainer>
      <FaqLine />
      <FaqTitle>faq</FaqTitle>
      <FaqData>
        <FaqImage src="assets/faq-image.png" />
        <FaqWrapper>
          <FaqSectionTitle>Frequently Asked Questions</FaqSectionTitle>
          <FaqSectionLine />
          {faqData.map((e, idx) => buildFaqCard(e, idx))}
        </FaqWrapper>
      </FaqData>
    </FaqContainer>
  );
};

export default Faq;
