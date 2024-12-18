import { render, screen } from '@testing-library/react';
import WorkExperience from './WorkExperience';

test('renders Work Experience section with jobs', () => {
  render(<WorkExperience />);
  expect(screen.getByRole('heading', { name: /Work Experience/i })).toBeInTheDocument();
  expect(screen.getByText('Web Developer Trainee')).toBeInTheDocument();
  expect(screen.getByText('September 2024 - Present')).toBeInTheDocument();
  expect(screen.getByText('Waste Truck Driver')).toBeInTheDocument();
  expect(screen.getByText('January 2013 - August 2024')).toBeInTheDocument();
});