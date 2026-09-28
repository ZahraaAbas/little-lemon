import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the homepage with the main heading and a reservation link', () => {
  render(
    <BrowserRouter>
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