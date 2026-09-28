import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Fake props: BookingForm needs these to render
const mockTimes = ['17:00', '18:00'];

test('renders the Choose date label', () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={jest.fn()} />);

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});

test('dispatches UPDATE_TIMES with the selected date when the date changes', () => {
  const mockDispatch = jest.fn();
  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);

  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2026-10-01' } });

  expect(mockDispatch).toHaveBeenCalledWith({
    type: 'UPDATE_TIMES',
    date: '2026-10-01',
  });
});