import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact button and opens form on click', () => {
  render(<Contact />);
  
  // Check that the "Contact Me" button is rendered
  const contactButton = screen.getByRole('button', { name: /Contact/i });
  expect(contactButton).toBeInTheDocument();
  
  // Simulate a click on the button
  fireEvent.click(contactButton);
  
  // Verify that the form fields are displayed
  expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
});