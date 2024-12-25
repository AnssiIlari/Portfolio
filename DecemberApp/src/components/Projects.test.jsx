import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects section with project cards', () => {
  render(<Projects />);
  expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
  expect(screen.getByText('Karelia Christmas Challenge 2023')).toBeInTheDocument();
  expect(screen.getByText('This very portfolio site.')).toBeInTheDocument();
  expect(screen.getAllByText(/View on GitHub/i)).toHaveLength(3);
});