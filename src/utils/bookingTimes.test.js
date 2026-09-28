import { initializeTimes, updateTimes } from './bookingTimes';
import { fetchAPI } from './api';

test('initializeTimes returns a non-empty list of times from the API', () => {
  const times = initializeTimes();

  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
  expect(times).toEqual(fetchAPI(new Date()));
});

test('updateTimes returns the times for the selected date', () => {
  const action = { type: 'UPDATE_TIMES', date: '2026-10-01' };
  const expectedTimes = fetchAPI(new Date('2026-10-01T00:00'));

  expect(updateTimes([], action)).toEqual(expectedTimes);
});

test('updateTimes keeps the current times when the date is empty', () => {
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '' };

  expect(updateTimes(currentState, action)).toEqual(currentState);
});