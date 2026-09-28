// Returns the initial list of available booking times.
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

// Reducer for availableTimes.
// For now it returns the same times for any date.
// Later it will fetch the times for the selected date from the API.
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return state;
    default:
      return state;
  }
}