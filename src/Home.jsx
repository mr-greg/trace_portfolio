// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
// import Resume from './components/Resume/Resume';
import Carousel from './components/Carousel/Carousel';
import logoData from './data/data-logo.json';
import socialData from './data/data-social-media.json';

const StyledHome = styled.div`
  padding: 0 25px;
  .nav-hero-wrapper {
    height: 100vh;
  }
`;

function Home() {
  return (
    <StyledHome>
      <div className="nav-hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      {/* <Resume /> */}
      <Carousel title="Logofolio." data={logoData} dir="ltr" />
      <Carousel title="Social Media." data={socialData} dir="rtl" />
      <Carousel title="Banner Assets." data={logoData} dir="ltr" />
      <Carousel title="Illustrations." data={logoData} dir="rtl" />
    </StyledHome>
  );
}

export default Home;
