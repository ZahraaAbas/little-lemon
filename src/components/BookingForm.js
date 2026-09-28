import { useState } from 'react';
import { getTodayDate, OCCASIONS, validateBooking } from '../utils/validation';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // One state variable per form field (controlled inputs)
  const [date, setDate] = useState(getTodayDate());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [submitError, setSubmitError] = useState('');

  // Remembers which fields the user has left, so errors only show after interaction
  const [touched, setTouched] = useState({});

  // Recalculated on every render, so errors always match the current values
  const errors = validateBooking({ date, time, guests, occasion }, availableTimes);
  const isFormValid = Object.keys(errors).length === 0;

  function markTouched(field) {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
  }

  // Shows a field's error only after the user has left that field
  function showError(field) {
    return touched[field] && errors[field];
  }

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // The old time may not be available on the new date
    setTime('');
    // Ask Main to update the available times for the new date
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  }

  function handleSubmit(e) {
    // Stop the browser from reloading the page on submit
    e.preventDefault();
    setSubmitError('');

    if (!isFormValid) {
      return;
    }

    const formData = {
      date,
      time,
      guests: Number(guests),
      occasion,
    };

    const isSubmitted = submitForm(formData);
    if (!isSubmitted) {
      setSubmitError('Sorry, we could not complete your booking. Please try again.');
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        required
        min={getTodayDate()}
        value={date}
        onChange={handleDateChange}
        onBlur={() => markTouched('date')}
        aria-invalid={showError('date') ? 'true' : 'false'}
        aria-describedby={showError('date') ? 'date-error' : undefined}
      />
      {showError('date') && (
        <p id="date-error" className="form-error">
          {errors.date}
        </p>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
        onBlur={() => markTouched('time')}
        aria-invalid={showError('time') ? 'true' : 'false'}
        aria-describedby={showError('time') ? 'time-error' : undefined}
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      {showError('time') && (
        <p id="time-error" className="form-error">
          {errors.time}
        </p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        required
        min="1"
        max="10"
        step="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        onBlur={() => markTouched('guests')}
        aria-invalid={showError('guests') ? 'true' : 'false'}
        aria-describedby={showError('guests') ? 'guests-error' : undefined}
      />
      {showError('guests') && (
        <p id="guests-error" className="form-error">
          {errors.guests}
        </p>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        required
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        onBlur={() => markTouched('occasion')}
        aria-invalid={showError('occasion') ? 'true' : 'false'}
        aria-describedby={showError('occasion') ? 'occasion-error' : undefined}
      >
        {OCCASIONS.map((occasionOption) => (
          <option key={occasionOption} value={occasionOption}>
            {occasionOption}
          </option>
        ))}
      </select>
      {showError('occasion') && (
        <p id="occasion-error" className="form-error">
          {errors.occasion}
        </p>
      )}

      {submitError && (
        <p className="form-error" role="alert">
          {submitError}
        </p>
      )}

      {!isFormValid && (
        <p id="form-hint" className="form-hint">
          Please complete all fields to make your reservation.
        </p>
      )}

      <button
        type="submit"
        className="button-primary"
        disabled={!isFormValid}
        aria-describedby={!isFormValid ? 'form-hint' : undefined}
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;