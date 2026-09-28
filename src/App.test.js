import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the Homepage text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const homeElement = screen.getByText(/homepage/i);
  expect(homeElement).toBeInTheDocument();
});