/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/destructuring-assignment */
import React, { FunctionComponent, ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useAppDispatch, useAppSelector } from '../../../../../../store';
import { setAppSliderNextAction, setAppSliderPrevAction, setAppSliderSlidingAction } from '../../../../../../store/actions/app-actions';
import { appSliderSelector } from '../../../../../../store/selectors/app-selectors';
import { Wrapper, CarouselContainer, CarouselSlot, SlideButtonContainer, SlideButton, PREV, NEXT } from './styles';

type Direction = typeof PREV | typeof NEXT;

interface CarouselState {
  pos: number;
  sliding: boolean;
  dir: Direction;
}

type CarouselAction = { type: Direction; numItems: number } | { type: 'stopSliding' };

const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const getInitialState = (numItems: number): CarouselState => ({ pos: 1, sliding: false, dir: NEXT });

const Carousel: FunctionComponent<{ children: ReactNode }> = props => {
  const numItems = React.Children.count(props.children);
  const dispatch = useAppDispatch();
  const sliderInfo = useAppSelector(appSliderSelector);
  console.log(sliderInfo.dir);
  //   const [state, dispatch] = React.useReducer(reducer, getInitialState(numItems));
  const slideRight = () => {
    if (sliderInfo.pos === 2) {
      return;
    }
    dispatch(setAppSliderNextAction());
    setTimeout(() => {
      dispatch(setAppSliderSlidingAction(false));
    }, 50);
  };
  const slideLeft = () => {
    if (sliderInfo.pos === 0) {
      return;
    }
    dispatch(setAppSliderPrevAction());
    setTimeout(() => {
      dispatch(setAppSliderSlidingAction(false));
    }, 50);
  };
  //   const slide = (dir: Direction) => {
  //     dispatch({ type: dir, numItems });
  //     setTimeout(() => {
  //       dispatch({ type: 'stopSliding' });
  //     }, 50);
  //   };

  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={sliderInfo.dir ? 'NEXT' : 'PREV'} sliding={sliderInfo.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot order={getOrder(index, sliderInfo.pos, numItems)}>{child}</CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <SlideButtonContainer>
        <SlideButton onClick={slideLeft} float="left">
          Prev
        </SlideButton>
        <SlideButton onClick={slideRight} float="right">
          Next
        </SlideButton>
      </SlideButtonContainer>
    </div>
  );
};

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch (action.type) {
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
