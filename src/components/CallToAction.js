import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-food.jpg';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            Little Lemon
          </h1>
          <p className="hero-subtitle">Chicago</p>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="button-primary">
            Reserve a Table
          </Link>
        </div>

        <img
          className="hero-image"
          src={heroImage}
          alt="A server holding a slate tray of bruschetta appetizers"
          width="400"
          height="605"
        />
      </div>
    </section>
  );
}

export default CallToAction;