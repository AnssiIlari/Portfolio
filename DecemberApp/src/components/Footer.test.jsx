import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
  render(<Footer />);
  
  // Check for the copyright text
  const currentYear = new Date().getFullYear();
  expect(screen.getByText(`© ${currentYear} Anssi Laitinen. All rights reserved.`)).toBeInTheDocument();
  
  // Check for the LinkedIn link
  const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/anssi-laitinen-93a963269/');
  
  // Check for the GitHub link
  const gitHubLink = screen.getByRole('link', { name: /GitHub/i });
  expect(gitHubLink).toBeInTheDocument();
  expect(gitHubLink).toHaveAttribute('href', 'https://github.com/AnssiIlari');
});