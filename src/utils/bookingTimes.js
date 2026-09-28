import { fetchAPI } from './api';

// Returns the available booking times for today.
export function initializeTimes() {
  return fetchAPI(new Date());
}

// Reducer for availableTimes: fetches the times for the selected date.
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Keep the current times if the date field was cleared
      if (!action.date) {
        return state;
      }
      // The date input gives a string like "2026-10-01".
      // Adding "T00:00" makes JavaScript read it in local time, not UTC.
      return fetchAPI(new Date(`${action.date}T00:00`));
    default:
      return state;
  }
}