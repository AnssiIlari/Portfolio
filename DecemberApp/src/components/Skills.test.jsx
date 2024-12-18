import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders Skills section with all skill categories', () => {
    render(<Skills />);
    
    // Check for the Skills heading
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
    
    // Check for each skill category
    expect(screen.getByText(/Programming Languages: C#, JavaScript, TypeScript, Python, Java, PHP/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend: React, React Native, HTML, CSS/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend: Node\.js, PHP, REST APIs/i)).toBeInTheDocument();
    expect(screen.getByText(/Databases: SQL \(MariaDB, MySQL, PostgreSQL\), NoSQL \(MongoDB, Firebase\)/i)).toBeInTheDocument();
    expect(screen.getByText(/CMS: ProcessWire/i)).toBeInTheDocument();
    expect(screen.getByText(/Testing: Jest, Mocha, Chai, Cypress/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile Development: React Native/i)).toBeInTheDocument();
    expect(screen.getByText(/Cybersecurity: Cisco Certified Hacker/i)).toBeInTheDocument();
    expect(screen.getByText(/Machine Learning: scikit-learn, Keras, NumPy, Pandas, PyPlot, Azure ML/i)).toBeInTheDocument();
    expect(screen.getByText(/RPA: UiPath/i)).toBeInTheDocument();
    expect(screen.getByText(/Linux\/Server Environments: Ubuntu, Nginx/i)).toBeInTheDocument();
  });