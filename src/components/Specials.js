import SpecialCard from './SpecialCard';
import specials from '../data/specials';
import './Specials.css';

function Specials() {
  return (
    <section className="specials container" aria-labelledby="specials-title">
      <h2 id="specials-title">This week&apos;s specials!</h2>
      <div className="specials-grid">
        {specials.map((special) => (
          <SpecialCard
            key={special.id}
            name={special.name}
            price={special.price}
            description={special.description}
            image={special.image}
            alt={special.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;