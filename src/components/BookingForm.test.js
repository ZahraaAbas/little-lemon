import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { getTodayDate } from '../utils/validation';

const mockTimes = ['17:00', '18:00'];

// Renders the form with fake props. Tests can override any prop.
function renderForm(props = {}) {
  const defaultProps = {
    availableTimes: mockTimes,
    dispatch: jest.fn(),
    submitForm: jest.fn(() => true),
  };
  render(<BookingForm {...defaultProps} {...props} />);
}

function getSubmitButton() {
  return screen.getByRole('button', { name: /make your reservation/i });
}

describe('BookingForm: rendering', () => {
  test('renders the Choose date label', () => {
    renderForm();
    expect(screen.getByText('Choose date')).toBeInTheDocument();
  });
});

describe('BookingForm: HTML5 validation attributes', () => {
  test('date input is required and cannot be in the past', () => {
    renderForm();
    const dateInput = screen.getByLabelText(/choose date/i);

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute('min', getTodayDate());
  });

  test('time select is required', () => {
    renderForm();
    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
  });

  test('guests input is required and limited to 1-10', () => {
    renderForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('occasion select is required', () => {
    renderForm();
    expect(screen.getByLabelText(/occasion/i)).toBeRequired();
  });
});

describe('BookingForm: React validation', () => {
  test('submit button is disabled while no time is selected', () => {
    renderForm();
    expect(getSubmitButton()).toBeDisabled();
  });

  test('submit button is enabled when all fields are valid', () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });

    expect(getSubmitButton()).toBeEnabled();
  });

  test('does not show a time error before the user leaves the field', () => {
    renderForm();
    expect(screen.queryByText('Please choose a time.')).not.toBeInTheDocument();
  });

  test('shows a time error after the user leaves the field empty', () => {
    renderForm();
    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.blur(timeSelect);

    expect(screen.getByText('Please choose a time.')).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('aria-invalid', 'true');
  });

  test('shows a guests error and disables submit for 11 guests', () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '11' } });
    fireEvent.blur(guestsInput);

    expect(
      screen.getByText('Please enter a whole number of guests between 1 and 10.')
    ).toBeInTheDocument();
    expect(getSubmitButton()).toBeDisabled();
  });
});

describe('BookingForm: interactions and submission', () => {
  test('dispatches UPDATE_TIMES with the selected date when the date changes', () => {
    const mockDispatch = jest.fn();
    renderForm({ dispatch: mockDispatch });

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2030-10-01' },
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      date: '2030-10-01',
    });
  });

  test('submits the form data when the form is valid', () => {
    const mockSubmit = jest.fn(() => true);
    renderForm({ submitForm: mockSubmit });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '18:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });
    fireEvent.click(getSubmitButton());

    expect(mockSubmit).toHaveBeenCalledWith({
      date: getTodayDate(),
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
    });
  });

  test('shows an error message when the API fails', () => {
    renderForm({ submitForm: jest.fn(() => false) });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.click(getSubmitButton());

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Sorry, we could not complete your booking. Please try again.'
    );
  });
});