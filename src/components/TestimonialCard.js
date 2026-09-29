import './TestimonialCard.css';

const MAX_RATING = 5;

function TestimonialCard({ name, rating, review }) {
  // Builds a string like "★★★★☆" for a rating of 4
  const stars = '★'.repeat(rating) + '☆'.repeat(MAX_RATING - rating);

  return (
    <article className="testimonial-card">
      <p className="testimonial-rating">
        {/* Stars are decorative, screen readers read the text instead */}
        <span aria-hidden="true">{stars}</span>
        <span className="visually-hidden">
          Rated {rating} out of {MAX_RATING}
        </span>
      </p>
      <h3 className="testimonial-name">{name}</h3>
      <blockquote className="testimonial-review">
        <p>{review}</p>
      </blockquote>
    </article>
  );
}

export default TestimonialCard;