import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Homepage text', () => {
  render(<App />);
  const homeElement = screen.getByText(/Homepage/i);
  expect(homeElement).toBeInTheDocument();
});