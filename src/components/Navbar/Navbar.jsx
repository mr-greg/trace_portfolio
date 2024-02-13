import { useState } from 'react';
import { StyledNavbar } from './StyledNavbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to toggle the visibility of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNavbar menuOpen={menuOpen}>
      <div className="header-logo">
        <Link to="/" className="text-logo">
          Trace.
        </Link>
      </div>
      {/* Burger menu icon */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Navigation links */}
      <nav className={menuOpen ? 'header-nav open' : 'header-nav'}>
        <Link to="#">Resume</Link>
        <Link to="#">Graphic Design</Link>
        <Link to="#">Animation</Link>
        <Link to="#">Photography</Link>
        <Link to="#">
          <button>Get in touch!</button>
        </Link>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
