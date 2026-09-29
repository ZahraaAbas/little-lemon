import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import { initializeTimes, updateTimes } from '../utils/bookingTimes';
import { submitAPI } from '../utils/api';

function Main() {
  // availableTimes lives here so it can be shared with the booking page
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // Sends the booking to the API.
  // Returns true on success so the form knows whether to show an error.
  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed', { state: formData });
    }
    return isSubmitted;
  }

  return (
    <main id="main-content" tabIndex="-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;