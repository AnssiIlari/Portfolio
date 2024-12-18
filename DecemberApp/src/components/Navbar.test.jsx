import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar links', () => {
  render(<Navbar />);
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Projects')).toBeInTheDocument();
  expect(screen.getByText('Skills')).toBeInTheDocument();
  expect(screen.getByText('Work Experience')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});