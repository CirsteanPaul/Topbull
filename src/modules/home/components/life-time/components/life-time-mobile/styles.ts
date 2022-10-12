import styled from '../../../../../../theme';

export const LtMobileContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
export const Paper = styled.div`
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding: 25px;
`;

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div<{ img: string }>`
  text-align: center;
  padding: 100px;
  width: 100%;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

export const CarouselContainer = styled.div<{ sliding: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: ${props => (props.sliding ? 'none' : 'transform 0.3s ease')};
  transform: ${props => {
    if (!props.sliding) return '0';
    if (props.dir === 'PREV') return 'translateX(-100%)';
    return 'translateX(100%)';
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div<{ order: number }>`
  width: 100%;
  margin: 20px;
  order: ${props => props.order};
  display: flex;
  flex-direction: column;
`;

export const SlideButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const SlideButton = styled.button<{ float: 'left' | 'right' }>`
  color: #ffffff;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 100;
  padding: 10px;
  background-color: #f66f3e;
  border: 1px solid white;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const PatternBox = styled.div`
  border: 2px solid black;
  width: 60%;
  margin: 20px auto;
  padding: 30px 20px;
  white-space: pre-line;
`;

export const D = styled.span`
  padding: 3px;
`;
