import ownersImageA from '../assets/mario-adrian-a.jpg';
import ownersImageB from '../assets/mario-adrian-b.jpg';
import './Chicago.css';

function Chicago() {
  return (
    <section id="about" className="chicago container" aria-labelledby="about-title">
      <div className="chicago-text">
        <h2 id="about-title">Our Story</h2>
        <p className="chicago-subtitle">Little Lemon, Chicago</p>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.
        </p>
        <p>
          Our menu mixes traditional family recipes with a modern twist, and
          every dish is made with fresh, locally sourced ingredients.
        </p>
      </div>

      <div className="chicago-images">
        <img
          className="chicago-image chicago-image-a"
          src={ownersImageA}
          alt="Mario and Adrian talking while preparing dishes in the kitchen"
          width="800"
          height="533"
        />
        <img
          className="chicago-image chicago-image-b"
          src={ownersImageB}
          alt="Mario and Adrian laughing together in front of the pizza oven"
          width="800"
          height="533"
        />
      </div>
    </section>
  );
}

export default Chicago;