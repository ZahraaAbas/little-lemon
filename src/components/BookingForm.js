import { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch }) {
  // One state variable per form field (controlled inputs)
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

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
    // TODO: send the form data to the API
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
  id="res-time"
  value={time}
  onChange={(e) => setTime(e.target.value)}
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

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your reservation</button>
    </form>
  );
}

export default BookingForm;