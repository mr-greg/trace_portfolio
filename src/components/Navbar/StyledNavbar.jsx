import styled from 'styled-components';

export const StyledNavbar = styled.header`
  font-family: 'Montserrat';
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 80px;
  position: relative; /* Ensure proper stacking context */

  .header-logo {
    .text-logo {
      font-size: 48px;
      text-decoration: none;
      color: black;
      font-weight: 600;
    }
  }

  .burger-menu {
    display: none; /* Hide burger menu by default */
    cursor: pointer;
    position: relative; /* Ensure proper stacking context */

    .bar {
      width: 25px;
      height: 3px;
      background-color: black;
      margin: 5px 0;
    }
  }

  .header-nav {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    z-index: 1;

    a {
      font-size: 1.5vw;
      text-decoration: none;
      color: black;
      font-weight: 400;
      margin: 0 15px;

      &:hover {
        opacity: 0.7;
      }
    }

    button {
      /* Add styles for the button */
    }
  }

  /* Media query for small screens */
  @media (max-width: 768px) {
    .header-nav {
      display: none; /* Hide navigation links by default */
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0;
      background-color: rgba(
        255,
        255,
        255,
        0.7
      ); /* Transparent white background */
      backdrop-filter: blur(10px); /* Apply blur effect */
      width: 100%;
      padding: 20px;
      z-index: 1000; /* Ensure navbar is above other content */

      a {
        margin: 10px 0;
      }
    }

    .burger-menu {
      display: block; /* Show burger menu icon */
      z-index: 1000; /* Ensure burger menu is above other content */
    }

    /* Open state for the navigation links */
    .header-nav.open {
      display: flex;
    }
  }
`;
