import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../assets/icon-hamburger.svg';
import './Nav.css';

function Nav() {
  // Controls the mobile menu. On large screens the links are always visible.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav aria-label="Main navigation" className="main-nav">
      <button
        type="button"
        className="menu-toggle"
        aria-label="Navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="main-menu"
        onClick={toggleMenu}
      >
        <img src={hamburgerIcon} alt="" width="24" height="24" />
      </button>

      <ul id="main-menu" className={isMenuOpen ? 'nav-list open' : 'nav-list'}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" onClick={closeMenu}>
            Reservations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;