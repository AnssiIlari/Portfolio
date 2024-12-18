import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact form', () => {
  render(<Contact />);
  expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
});