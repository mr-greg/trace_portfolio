import styled from 'styled-components';

export const StyledCarousel = styled.section`
  margin-top: 10%;
  padding: 50px 50px 0;
  margin-bottom: 50px;
  h1 {
    margin-bottom: -200px;
  }

  .rh300 {
    position: relative;
    height: 300vh;
  }
  .df-oh-ps {
    display: flex;
    overflow: hidden;
    position: sticky;
    top: 0;
    align-items: center;
    height: 100vh;
  }
  .df-g1r {
    display: flex;
    gap: 1rem;
  }
  .oh-pr-hw {
    overflow: hidden;
    position: relative;
    height: 450px;
    width: 450px;
    filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      z-index: 10;
    }
  }

  .bordel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    transition-duration: 300ms;
  }
`;
