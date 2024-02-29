// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import { StyledHero } from './StyledHero';
import TracePic from '../../assets/img/trace-pic.png';
import camera from '../../assets/img/camera.png';
import email from '../../assets/img/email.png';
import linkedin from '../../assets/img/linkedin.png';
import germanShepherd from '../../assets/img/german-shepherd.png';
import pinCamera from '../../assets/img/pin-camera.png';
import whale from '../../assets/img/whale.png';
import pinkCosmos from '../../assets/img/pink-cosmos.png';
import SplitType from 'split-type';
import gsap from 'gsap';
import GsapMagnetic from '../../assets/styles/GsapMagnetic';
import { motion } from 'framer-motion';

function Hero() {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const firstImageRef = useRef(null);

  useEffect(() => {
    if (firstImageRef.current) {
      const { width, height } = firstImageRef.current.getBoundingClientRect();
      setImageSize({ width, height });
    }
    // eslint-disable-next-line no-unused-vars
    const titleReveal = new SplitType('#animate-text');
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    gsap.to('.animate-parag', {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.3,
      ease: 'power4.inOut',
    });
  }, []);

  return (
    <StyledHero>
      <div className="hero-pic">
        <img
          src={TracePic}
          alt="trace picture"
          className="trace-pic"
          ref={firstImageRef}
        />

        <motion.img
          src={germanShepherd}
          alt="dog pin"
          className="pins pin-dog"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          style={{
            top: `${imageSize.height * 0.3}px`,
            left: `${imageSize.width * 0.8}px`,
          }}
        />
        <motion.img
          src={pinCamera}
          alt="camera pin"
          className="pins pin-camera"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          style={{
            top: `${imageSize.height * -0.05}px`,
            left: `${imageSize.width * -0.05}px`,
          }}
        />

        <motion.img
          src={whale}
          alt="whale pin"
          className="pins pin-whale"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          style={{
            top: `${imageSize.height * 0.64}px`,
            left: `${imageSize.width * 0.0}px`,
          }}
        />

        <motion.img
          src={pinkCosmos}
          alt="pink cosmos pin"
          className="pins pin-cosmos"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          style={{
            top: `${imageSize.height * 0.95}px`,
            left: `${imageSize.width * 0.6}px`,
          }}
        />
      </div>

      <div className="hero-text">
        <h1 id="animate-text">Trace.</h1>
        <p>
          <strong>{`Hey there! I'm Trace.`}</strong>
        </p>
        <article>
          <p className="animate-parag">
            {`I'm a 25-year-old with a liking for all things random and a love for expressing myself through the vibrant world of design and more! I am currently rocking my third year as an animator and graphic designer at T-Mobile, I'm also a photography enthusiast on the side.`}
          </p>
          <p className="animate-parag">
            {`My design style is a mix of fun and color, and I pride myself on being adaptable to suit the unique vibes of the brands I collaborate with. From crafting banner assets and logo designs to whipping up social media assets and both digital and hand-drawn illustrations, I'm all about telling stories through playful and distinctive visuals.`}
          </p>
          <p className="animate-parag">
            {`Ready to dive into my creative universe? Check out my portfolio for a curated peek at my past adventures. If you're up for some collaboration or just want to chat about creativity, shoot me a message - I'd love to hear from you.`}
          </p>
          <p className="animate-parag">
            <strong>Thank you for swinging by my portfolio!</strong>
          </p>
        </article>

        <div className="contact">
          <h2>contact</h2>
          <div className="contact-wrapper">
            <div className="contact-left">
              <div className="mail contact-link">
                <a
                  href="mailto:tracethle@gmail.com"
                  target="_blank"
                  rel="noreferrer">
                  <GsapMagnetic>
                    <img
                      src={email}
                      alt="email icon"
                      className="contact-icon"
                    />
                  </GsapMagnetic>
                </a>
                <a
                  href="mailto:tracethle@gmail.com"
                  target="_blank"
                  rel="noreferrer">
                  tracethle@gmail.com
                </a>
              </div>
              <div className="contact-link">
                <a
                  href="https://www.linkedin.com/in/tracele/"
                  className="linkedin contact-link"
                  target="_blank"
                  rel="noreferrer">
                  <GsapMagnetic>
                    <img
                      src={linkedin}
                      alt="linkedin icon"
                      className="contact-icon"
                    />
                  </GsapMagnetic>
                </a>
                <a
                  href="https://www.linkedin.com/in/tracele/"
                  target="_blank"
                  rel="noreferrer">
                  linkedin.com/in/tracele
                </a>
              </div>
            </div>
            <div className="contact-right">
              <div className="insta contact-link">
                <a
                  href="https://www.instagram.com/laez.log/"
                  target="_blank"
                  rel="noreferrer">
                  <GsapMagnetic>
                    <img
                      src={camera}
                      alt="camera icon"
                      className="contact-icon"
                    />
                  </GsapMagnetic>
                </a>
                <a
                  href="https://www.instagram.com/laez.log/"
                  target="_blank"
                  rel="noreferrer">
                  instagram.com/laez.log
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;
