import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;