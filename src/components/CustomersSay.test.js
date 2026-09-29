import { render, screen } from '@testing-library/react';
import CustomersSay from './CustomersSay';
import testimonials from '../data/testimonials';

test('renders one card for each testimonial', () => {
  render(<CustomersSay />);

  expect(screen.getAllByRole('article')).toHaveLength(testimonials.length);
});

test('gives screen readers a text version of each rating', () => {
  render(<CustomersSay />);

  testimonials.forEach((testimonial) => {
    expect(screen.getByRole('heading', { name: testimonial.name })).toBeInTheDocument();
  });
  expect(screen.getAllByText(/rated \d out of 5/i)).toHaveLength(testimonials.length);
});