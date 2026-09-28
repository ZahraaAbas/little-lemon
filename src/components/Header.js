import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../assets/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Little Lemon homepage" width="148" height="40" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;