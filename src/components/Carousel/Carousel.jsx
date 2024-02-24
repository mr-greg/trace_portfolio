/* eslint-disable react/prop-types */
import ScrollCarousel from 'scroll-carousel-react';
import { StyledCarousel } from './StyledCarousel';

// eslint-disable-next-line react/prop-types
const Logofolio = ({ title, data, dir }) => {
  // Accept title and data as props
  return (
    <StyledCarousel>
      <h1>{title}</h1>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
        direction={dir}>
        {data.map((item) => (
          <div className="imgContainer" key={item.id}>
            <img src={item.url} />
          </div>
        ))}
      </ScrollCarousel>
    </StyledCarousel>
  );
};

export default Logofolio;
