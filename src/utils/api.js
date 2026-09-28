// Booking API provided by the Coursera capstone course:
// https://raw.githubusercontent.com/courseraap/capstone/main/api.js
// Copied into the project because GitHub serves the file as text/plain,
// so browsers refuse to run it from a <script> tag, and Jest cannot see it.

const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

// Returns an array of available times for the given Date object
export const fetchAPI = function (date) {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

// Returns true when the booking is submitted successfully
export const submitAPI = function (formData) {
  return true;
};