import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledCarousel } from './StyledCarousel';

const Logofolio = ({ title, data }) => {
  // Accept title and data as props
  return (
    <StyledCarousel>
      <HorizontalScrollCarousel title={title} data={data} />{' '}
      {/* Pass title and data as props */}
    </StyledCarousel>
  );
};

Logofolio.propTypes = {
  title: PropTypes.string.isRequired, // Validate that title is a string and is required
  data: PropTypes.array.isRequired,
};

const HorizontalScrollCarousel = ({ title, data }) => {
  // Accept title and data as props
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    // done
    <section ref={targetRef} className="rh300">
      <h1>{title}</h1> {/* Use the title prop here */}
      <div className="df-oh-ps">
        <motion.div style={{ x }} className="df-g1r">
          {data.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

HorizontalScrollCarousel.propTypes = {
  title: PropTypes.string.isRequired, // Validate that title is a string and is required
  data: PropTypes.array.isRequired,
};

// eslint-disable-next-line react/prop-types
const Card = ({ card }) => {
  return (
    <div key={card.id} className="oh-pr-hw">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="bordel"></div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Logofolio;
