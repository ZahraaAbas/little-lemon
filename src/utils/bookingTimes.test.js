import { initializeTimes, updateTimes } from './bookingTimes';

test('initializeTimes returns the initial list of booking times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  expect(initializeTimes()).toEqual(expectedTimes);
});

test('updateTimes returns the same state it receives', () => {
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-10-01' };

  expect(updateTimes(currentState, action)).toEqual(currentState);
});