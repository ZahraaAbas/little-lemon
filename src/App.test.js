import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the homepage with the main heading and a reservation link', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  );

  expect(
    screen.getByRole('heading', { level: 1, name: /little lemon/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /reserve a table/i })).toHaveAttribute(
    'href',
    '/booking'
  );
});

test('sets the page title and provides a skip link', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  );

  expect(document.title).toBe('Home | Little Lemon');
  expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute(
    'href',
    '#main-content'
  );
});