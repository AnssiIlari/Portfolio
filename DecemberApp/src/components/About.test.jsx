import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About section', () => {
  render(<About />);
  expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
  expect(screen.getByText(/Hello!/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
});