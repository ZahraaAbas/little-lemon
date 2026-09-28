import { render, screen } from '@testing-library/react';
import Specials from '../pages/Specials';
import specials from '../data/specials';

test('renders one card for each special', () => {
  render(<Specials />);

  expect(screen.getAllByRole('article')).toHaveLength(specials.length);
});

test('renders the name and price of every special', () => {
  render(<Specials />);

  specials.forEach((special) => {
    expect(screen.getByRole('heading', { name: special.name })).toBeInTheDocument();
    expect(screen.getByText(special.price)).toBeInTheDocument();
  });
});