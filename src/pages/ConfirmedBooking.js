import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import './ConfirmedBooking.css';

// Turns "2026-10-01" into "Thursday, October 1, 2026"
function formatDate(dateString) {
  return new Date(`${dateString}T00:00`).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ConfirmedBooking() {
  // The booking details are sent here by navigate() in Main
  const location = useLocation();
  const booking = location.state;

  // Hooks must run before any early return, so the title is chosen here
  usePageTitle(booking ? 'Booking Confirmed' : 'No Booking Found');

  // Edge case: the user opened /confirmed directly without booking
  if (!booking) {
    return (
      <section className="container confirmation">
        <h1>No booking found</h1>
        <p>It looks like you have not made a reservation yet.</p>
        <Link to="/booking" className="button-primary">
          Reserve a table
        </Link>
      </section>
    );
  }

  return (
    <section className="container confirmation">
      <h1>Your table is booked!</h1>
      <p>Thank you for choosing Little Lemon. Here are your booking details:</p>
      <dl className="confirmation-details">
        <dt>Date</dt>
        <dd>
          <time dateTime={booking.date}>{formatDate(booking.date)}</time>
        </dd>
        <dt>Time</dt>
        <dd>{booking.time}</dd>
        <dt>Guests</dt>
        <dd>{booking.guests}</dd>
        <dt>Occasion</dt>
        <dd>{booking.occasion}</dd>
      </dl>
      <Link to="/" className="button-primary">
        Back to homepage
      </Link>
    </section>
  );
}

export default ConfirmedBooking;