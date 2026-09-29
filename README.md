# Little Lemon: Table Reservation Web App

A responsive, accessible React web app that lets customers of **Little Lemon**, a family-owned Mediterranean restaurant in Chicago, reserve a table online.

Built as the capstone project of the **Meta Front-End Developer Professional Certificate** (Coursera).

---

## The problem

Little Lemon customers could not reserve a table online. This made booking harder for customers and gave the restaurant less information for planning staff and supplies.

## The solution

A simple reservation flow, based on the needs found in user research:

```
Homepage → Reserve a Table → Choose date → Choose time → Guests → Occasion → Confirm → Confirmation page
```

---

## Features

- **Booking form** with date, time, number of guests and occasion
- **Available times update** automatically when the date changes (from the course booking API)
- **Client-side validation** (HTML5 and React) with clear error messages next to each field
- **Confirmation page** showing the booking details
- **Edge cases handled**: past dates, invalid guest numbers, unavailable times, API failure, opening the confirmation page without a booking
- **Homepage** with hero, weekly specials, customer testimonials and the restaurant story
- **Responsive design**: mobile, tablet and desktop, with a mobile navigation menu
- **Accessible**: Lighthouse Accessibility score of **100** on the homepage and booking page

---

## Tech stack

| Tool | Use |
| --- | --- |
| React 19 (Create React App) | UI and state |
| React Router 6 | Page navigation |
| Jest and React Testing Library | Unit tests |
| Plain CSS with CSS variables | Styling based on the Little Lemon style guide |

No extra UI or form libraries were used, to keep the project simple.

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (installed with Node.js)

### Installation

```bash
git clone https://github.com/ZahraaAbas/little-lemon.git
cd little-lemon
npm install
```

### Run the app

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

### Run the tests

```bash
npm test -- --watchAll=false
```

---

## Project structure

```
src/
├── assets/        Images and icons (resized and compressed)
├── components/    Reusable UI parts (Header, Nav, BookingForm, SpecialCard...)
├── data/          Local data for specials and testimonials
├── hooks/         Custom hooks (usePageTitle)
├── pages/         One component per route (HomePage, BookingPage, ConfirmedBooking)
├── utils/         Logic without UI: API, booking times reducer, validation
├── App.js         Layout: header, main content and footer
└── index.js       Entry point, wraps the app in BrowserRouter
```

Each test file sits next to the file it tests (for example `BookingForm.test.js`).

---

## How it works

### State management

- `availableTimes` lives in `Main` and is managed with **`useReducer`**, so it can be shared between the booking page and the confirmation flow.
- `initializeTimes()` gets today's times and `updateTimes()` gets the times for the selected date. Both are pure functions in `src/utils/bookingTimes.js`, which makes them easy to test.
- The form uses **controlled inputs**: every field value is stored in React state.

### Validation

- **HTML5 attributes** (`required`, `min`, `max`, `step`) describe the rules to the browser.
- **`validateBooking()`** in `src/utils/validation.js` returns an error message for each invalid field.
- Errors appear only **after the user leaves a field**, so the form does not look wrong before the user has started.
- The submit button stays disabled until the form is valid, and a hint explains why.

---

## Accessibility

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`, `address`, `time`, `dl`
- Every input has a connected `<label>` (`htmlFor` and `id`)
- Error messages are linked to their field with `aria-describedby` and `aria-invalid`
- API errors are announced with `role="alert"`
- Meaningful `alt` text for images, and empty `alt` for decorative icons
- Star ratings have a text version for screen readers ("Rated 4 out of 5")
- Mobile menu button uses `aria-expanded` and `aria-controls`, and closes with **Escape**
- Current page link is marked with `aria-current="page"`
- **Skip to main content** link for keyboard users
- Visible focus outline, and a unique page title for each page
- Colour contrast checked against WCAG AA

---

## Testing

**35 unit tests** in 7 test suites cover:

- `initializeTimes` and `updateTimes` (including an empty date)
- `validateBooking` in both **valid and invalid** states
- HTML5 validation attributes on every form field
- Showing errors after leaving a field, and the disabled submit button
- Submitting the form, and showing an error when the API fails
- Navigation menu (`aria-expanded`, `aria-current`, Escape key)
- Specials and testimonials rendering from their data
- Page title and skip link

---

## Design and technical decisions

| Decision | Reason |
| --- | --- |
| The course API (`api.js`) is copied into `src/utils` | GitHub serves the original file as `text/plain` with `nosniff`, so browsers refuse to run it from a `<script>` tag. Importing it also lets Jest use it in tests. |
| React Router **6** instead of 7 | The course is based on v6, and v7 fails in the Create React App Jest setup (`TextEncoder is not defined`). |
| Dates are read as local time (`"2026-10-01T00:00"`) | Avoids showing the times for the wrong day in time zones behind UTC. |
| Some colours are darker than the style guide (prices, star ratings) | The original orange and yellow did not have enough contrast on light backgrounds. |
| `aria-label` is used only where there is no visible text | For example the icon-only menu button. The booking button keeps its visible text as its accessible name. |
| "Online Menu" and "Order a delivery" links from the wireframe are not included | There are no menu or ordering pages yet, and links that lead nowhere would confuse users. |
| Images were resized and compressed | Some original images were up to 20 MB. They are now under 250 KB each. |

---

## Future improvements

- Seating options (indoor or outdoor) and an additional comments field, as suggested in the user research
- Menu, online ordering and login pages
- A real booking back end with email confirmation
- Allow customers to change or cancel a booking

---

## Author

**Zahraa Abas**: [GitHub](https://github.com/ZahraaAbas)