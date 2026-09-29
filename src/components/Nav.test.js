import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

function renderNav(initialPath = '/') {
  render(
    <MemoryRouter
  initialEntries={[initialPath]}
  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
>
      <Nav />
    </MemoryRouter>
  );
}

test('menu button toggles aria-expanded when clicked', () => {
  renderNav();
  const menuButton = screen.getByRole('button', { name: /navigation menu/i });

  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(menuButton);
  expect(menuButton).toHaveAttribute('aria-expanded', 'true');
});

test('marks the current page link with aria-current', () => {
  renderNav('/booking');

  expect(screen.getByRole('link', { name: /reservations/i })).toHaveAttribute(
    'aria-current',
    'page'
  );
  expect(screen.getByRole('link', { name: /home/i })).not.toHaveAttribute(
    'aria-current'
  );
});

test('pressing Escape closes the open menu', () => {
  renderNav();
  const menuButton = screen.getByRole('button', { name: /navigation menu/i });

  fireEvent.click(menuButton);
  expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  fireEvent.keyDown(document, { key: 'Escape' });
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});