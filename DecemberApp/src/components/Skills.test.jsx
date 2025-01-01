import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders Skills section with all skill categories', () => {
    render(<Skills />);
    
    // Check for the Skills heading
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
    
    // Check for each skill category title
    expect(screen.getByText(/Programming Languages/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend/i)).toBeInTheDocument();
    expect(screen.getByText(/Databases/i)).toBeInTheDocument();
    expect(screen.getByText(/DevOps & CI\/CD/i)).toBeInTheDocument();
    expect(screen.getByText(/CMS/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Testing/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Mobile Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Cybersecurity/i)).toBeInTheDocument();
    expect(screen.getByText(/Machine Learning/i)).toBeInTheDocument();
    expect(screen.getByText(/RPA/i)).toBeInTheDocument();
    expect(screen.getByText(/Linux\/Server Environments/i)).toBeInTheDocument();
});