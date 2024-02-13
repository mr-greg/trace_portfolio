import styled from 'styled-components';
import tracePicFull from '../../assets/img/trace-pic-full.png';

export const StyledHero = styled.div`
  display: flex;
  padding: 50px 50px 0;

  .hero-pic {
    width: 30%;
    position: relative;
    z-index: 999;

    .trace-pic {
      width: 90%;
    }

    .pins {
      position: absolute;
      width: 25%;
      cursor: pointer;
    }
    .pin-dog {
      top: 220px;
      right: 15px;
    }
    .pin-camera {
      top: -20px;
      left: -30px;
    }
    .pin-whale {
      bottom: 150px;
      left: -30px;
    }
    .pin-cosmos {
      bottom: -65px;
      right: 80px;
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
      width: 35px;
      height: 35px;
    }

    h2 {
      margin: 35px 0 25px;
    }

    .contact-wrapper {
      display: flex;
    }

    .contact-left {
      margin-right: 25%;

      :first-child {
        margin-bottom: 5px;
      }
    }

    .contact-right {
      :first-child {
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
        font-size: 18px;
        font-weight: 600;

        &:hover {
          transform: none;
        }
      }
    }
  }
  @media only screen and (max-width: 1500px) {
    .trace-pic {
      content: url(${tracePicFull});
    }
    .pins {
      display: none;
    }
  }
`;
