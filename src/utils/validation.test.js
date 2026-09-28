import { getTodayDate, validateBooking } from './validation';

const availableTimes = ['17:00', '18:00'];

// A complete, valid booking. Each test changes one field to make it invalid.
const validValues = {
  date: getTodayDate(),
  time: '17:00',
  guests: 2,
  occasion: 'Birthday',
};

describe('getTodayDate', () => {
  test('returns the date in YYYY-MM-DD format', () => {
    expect(getTodayDate()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('validateBooking: valid state', () => {
  test('returns no errors for a complete, valid booking', () => {
    expect(validateBooking(validValues, availableTimes)).toEqual({});
  });

  test('accepts the minimum (1) and maximum (10) number of guests', () => {
    expect(validateBooking({ ...validValues, guests: 1 }, availableTimes)).toEqual({});
    expect(validateBooking({ ...validValues, guests: 10 }, availableTimes)).toEqual({});
  });
});

describe('validateBooking: invalid state', () => {
  test('requires a date', () => {
    const errors = validateBooking({ ...validValues, date: '' }, availableTimes);
    expect(errors.date).toBe('Please choose a date.');
  });

  test('rejects a date in the past', () => {
    const errors = validateBooking({ ...validValues, date: '2000-01-01' }, availableTimes);
    expect(errors.date).toBe('Please choose today or a future date.');
  });

  test('requires a time', () => {
    const errors = validateBooking({ ...validValues, time: '' }, availableTimes);
    expect(errors.time).toBe('Please choose a time.');
  });

  test('rejects a time that is not available', () => {
    const errors = validateBooking({ ...validValues, time: '23:30' }, availableTimes);
    expect(errors.time).toBe(
      'This time is no longer available. Please choose another time.'
    );
  });

  test('requires the number of guests', () => {
    const errors = validateBooking({ ...validValues, guests: '' }, availableTimes);
    expect(errors.guests).toBe('Please enter the number of guests.');
  });

  test('rejects guests below 1, above 10, or not a whole number', () => {
    const message = 'Please enter a whole number of guests between 1 and 10.';

    expect(validateBooking({ ...validValues, guests: 0 }, availableTimes).guests).toBe(message);
    expect(validateBooking({ ...validValues, guests: 11 }, availableTimes).guests).toBe(message);
    expect(validateBooking({ ...validValues, guests: 2.5 }, availableTimes).guests).toBe(message);
  });

  test('rejects an unknown occasion', () => {
    const errors = validateBooking({ ...validValues, occasion: 'Wedding' }, availableTimes);
    expect(errors.occasion).toBe('Please choose an occasion.');
  });
});