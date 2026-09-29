import BookingForm from '../components/BookingForm';
import './BookingPage.css';
import usePageTitle from '../hooks/usePageTitle';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  usePageTitle('Booking');

  return (
    <>
      <section className="page-header" aria-labelledby="booking-title">
        <div className="container">
          <h1 id="booking-title">Reserve a Table</h1>
          <p>
            Choose a date, time and number of guests. We will confirm your table
            right away.
          </p>
        </div>
      </section>

      <div className="container booking-layout">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </>
  );
}

export default BookingPage;