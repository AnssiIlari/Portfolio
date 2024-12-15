import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Karelia Christmas Challenge 2023',
      description: 'Rearranged a scrambled image using clues from a CSV file.',
      link: 'https://github.com/AnssiIlari/Karelia-Coding-Competition-2023',
    },
    {
      title: 'Portfolio',
      description: 'This very portfolio site.',
      link: 'https://github.com/AnssiIlari/YourPortfolioRepo',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;