import './SpecialCard.css';

// Shows one dish. All the content comes from props, so the card is reusable.
function SpecialCard({ name, price, description, image, alt }) {
  return (
    <article className="special-card">
      <img className="special-card-image" src={image} alt={alt} />
      <div className="special-card-body">
        <div className="special-card-header">
          <h3 className="special-card-title">{name}</h3>
          <span className="special-card-price">{price}</span>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default SpecialCard;