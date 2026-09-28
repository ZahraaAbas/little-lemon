// Returns today's date as "YYYY-MM-DD" in the user's local time.
// (toISOString() uses UTC, which can give yesterday's date late at night.)
export function getTodayDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const OCCASIONS = ['Birthday', 'Anniversary'];

// Checks the booking form values.
// Returns an object with one error message per invalid field.
// An empty object means the form is valid.
export function validateBooking(values, availableTimes) {
  const errors = {};
  const { date, time, guests, occasion } = values;

  if (!date) {
    errors.date = 'Please choose a date.';
  } else if (date < getTodayDate()) {
    errors.date = 'Please choose today or a future date.';
  }

  if (!time) {
    errors.time = 'Please choose a time.';
  } else if (!availableTimes.includes(time)) {
    errors.time = 'This time is no longer available. Please choose another time.';
  }

  const guestsNumber = Number(guests);
  if (guests === '') {
    errors.guests = 'Please enter the number of guests.';
  } else if (!Number.isInteger(guestsNumber) || guestsNumber < 1 || guestsNumber > 10) {
    errors.guests = 'Please enter a whole number of guests between 1 and 10.';
  }

  if (!OCCASIONS.includes(occasion)) {
    errors.occasion = 'Please choose an occasion.';
  }

  return errors;
}