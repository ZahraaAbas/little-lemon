import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <Link to="/" className="footer-logo">
          <img src={logo} alt="Little Lemon homepage" width="148" height="40" />
        </Link>

        <nav aria-label="Footer navigation">
          <h2 className="footer-title">Navigation</h2>
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title" className="footer-title">
            Contact
          </h2>
          <address className="footer-list">
            <p>123 Lemon Street, Chicago, IL</p>
            <p>
              <a href="tel:+13125550123">(312) 555-0123</a>
            </p>
            <p>
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </p>
          </address>
        </section>

        <section aria-labelledby="footer-social-title">
          <h2 id="footer-social-title" className="footer-title">
            Social Media
          </h2>
          <ul className="footer-list">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>

      <p className="container footer-copyright">
        <small>&copy; {currentYear} Little Lemon. All rights reserved.</small>
      </p>
    </footer>
  );
}

export default Footer;