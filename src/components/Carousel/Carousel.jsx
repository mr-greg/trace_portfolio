/* eslint-disable react/prop-types */
import ScrollCarousel from 'scroll-carousel-react';
import { StyledCarousel } from './StyledCarousel';

// eslint-disable-next-line react/prop-types
const Carousel = ({ title, data, dir }) => {
  // Accept title and data as props
  return (
    <StyledCarousel>
      <h1>{title}</h1>
      <ScrollCarousel
        autoplay
        autoplaySpeed={0.1}
        speed={5}
        onReady={() => console.log('I am ready')}
        direction={dir}>
        {data.map((item) => (
          <div
            className="imgContainer"
            key={item.id}
            // style={{
            // put index l17 in arg if needed
            //   backgroundColor: index % 2 === 0 ? '#d7d6cf' : '#d7d6cf',
            // }}
          >
            <img src={item.url} />
          </div>
        ))}
      </ScrollCarousel>
    </StyledCarousel>
  );
};

export default Carousel;
