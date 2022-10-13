/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
// import { useSwipeable } from 'react-swipeable';
// import { LtMobileContainer, LtMobileSlider } from './styles';

// const LtMobile = (): JSX.Element => {
//   const NEXT = 'NEXT';
//   const PREV = 'PREV';

//   type Direction = typeof PREV | typeof NEXT;
//   const slide = (dir: Direction) => {
//     dispatch({ type: dir, numItems });
//     setTimeout(() => {
//       dispatch({ type: 'stopSliding' });
//     }, 50);
//   };

//   const handlers = useSwipeable({
//     onSwipedLeft: () => slide(NEXT),
//     onSwipedRight: () => slide(PREV),
//     swipeDuration: 500,
//     preventScrollOnSwipe: true,
//     trackMouse: true,
//   });
//   return (
//     <LtMobileContainer>
//       <LtMobileSlider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </LtMobileSlider>
//     </LtMobileContainer>
//   );
// };

// export default LtMobile;
import React from 'react';
// Carousel originally copied from:
// https://medium.com/@incubation.ff/build-your-own-css-carousel-in-react-part-one-86f71f6670ca
import Carousel from './inde';
import { LifeTimeMobileCardData } from './constants';
import LtmCard from './life-time-mobile-card';
// Carousel originally copied from:
// https://medium.com/@incubation.ff/build-your-own-css-carousel-in-react-part-one-86f71f6670ca
const SimpleCarousel = () => {
  return (
    <Carousel>
      {LifeTimeMobileCardData.map(data => (
        <LtmCard {...data} key={data.title} />
      ))}
    </Carousel>
  );
};

export default SimpleCarousel;
