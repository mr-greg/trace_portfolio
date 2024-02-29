import styled from 'styled-components';
import tracePicFull from '../../assets/img/trace-pic-full.png';
import TracePic from '../../assets/img/trace-pic.png';

export const StyledHero = styled.div`
  display: flex;
  padding: 50px 50px 0;

  .hero-pic {
    width: 30%;
    position: relative;
    z-index: 999;

    .trace-pic {
      background-image: ${TracePic};
      width: 90%;
      height: auto;
    }

    .pins {
      position: absolute;
      width: 25%;
      cursor: pointer;
      height: auto;
    }
    .pin-dog {
      top: 25%;
      right: 5%;
    }
    .pin-camera {
      top: -3%;
      left: -5%;
    }
    .pin-whale {
      bottom: 45%;
      left: -5%;
    }
    .pin-cosmos {
      bottom: 20%;
      right: 20%;
    }
  }

  .hero-text {
    width: 80%;
    h1,
    strong {
      display: block;
      margin-bottom: 15px;
    }

    h1 {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      line-height: 5.9rem;
      padding-bottom: 10px;
    }

    .char {
      transform: translateY(115px);
      transition: transform 0.5s;
    }

    article {
      width: 95%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    .animate-parag {
      transform: translateY(300px);
      transition: transform 1.5s;
    }

    article p {
      margin-bottom: 20px;
      line-height: 1.5;
      text-align: justify;
    }

    .contact-icon {
      width: 50px;
      height: 50px;
    }

    h2 {
      margin: 35px 0 25px;
    }

    .contact-wrapper {
      display: flex;
    }

    .contact-left {
      margin-right: 25%;

      div {
        margin-bottom: 15px;
      }
    }

    .contact-right {
      div {
        margin-bottom: 5px;
      }
    }

    .contact-link {
      display: flex;
      align-items: center;

      img {
        margin-right: 20px;
      }

      a {
        text-decoration: none;
        color: black;
        font-size: 24px;
        font-weight: 600;

        &:hover {
          transform: none;
        }
      }
    }
  }
  /* @media only screen and (max-width: 1500px) {
    .trace-pic {
      content: url(${tracePicFull});
    }
    .pins {
      display: none;
    }
  } */
`;
