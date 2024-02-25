// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
// import Resume from './components/Resume/Resume';
import Logofolio from './components/Carousel/Carousel';
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
      <div className="logo-wrapper">
        <Logofolio
          title="Logofolio."
          data={logoData}
          dir="ltr"
          angle={'30deg'}
        />
      </div>
      <Logofolio
        title="Social Media."
        data={socialData}
        dir="rtl"
        angle={'-30deg'}
      />
    </StyledHome>
  );
}

export default Home;
