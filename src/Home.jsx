// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Resume from './components/Resume/Resume';
import Logofolio from './components/Carousel/Carousel';
import logoData from './data/data-logo.json';
import socialData from './data/data-social-media.json';

const StyledHome = styled.div`
  margin: 0 25px;
`;

function Home() {
  return (
    <StyledHome>
      <Navbar />
      <Hero />
      <Resume />
      <Logofolio title="Logofolio." data={logoData} />
      <Logofolio title="Social Media." data={socialData} />
    </StyledHome>
  );
}

export default Home;
