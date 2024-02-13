import styled from 'styled-components';

export const StyledResume = styled.section`
  margin-top: 10%;
  margin-bottom: 50px;
  padding: 50px 50px 0;

  h1 {
    margin-bottom: 50px;
  }

  .wrapper {
    background-color: #fee7cc;

    .categories {
      display: flex;

      .category-container {
        flex: 1;
        /* not selected color */
        background-color: #fee7cc;
        padding: 20px 10px;
        cursor: pointer;
        text-align: center;

        .category {
          font-family: 'Montserrat';
          font-weight: 800;
          text-transform: uppercase;
          font-size: 2vw;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: transform 0.5s;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
      .selected {
        background-color: #ffd7a8;
      }
    }

    .content {
      padding: 75px 25px;
      .experience-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        img {
          width: 75px;
          height: 80px;
          margin-bottom: 10px;
          transition: 0.5s ease-in-out;

          &:hover {
            transform: scale(1.05);
          }
        }
        h4 {
          font-family: 'Montserrat';
          font-size: 1.5vw;
          font-weight: 600;
          margin-bottom: 10px;
        }
        a {
          text-decoration: none;
          color: var(--orangeColor);
          font-weight: 600;
          margin-bottom: 10px;

          &:hover {
            transform: scale(1.02);
          }
        }
        p {
          font-size: 16px;
          opacity: 70%;
          margin-bottom: 5px;

          &:first-child {
            margin-top: 10px;
          }
        }

        .expWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;

          .clients {
            text-align: center;
          }
        }
      }
    }
  }
`;
