import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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
          <InView triggerOnce key={project.title}>
            {({ inView, ref }) => (
              <motion.div
                className="project-card"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 1 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </motion.div>
            )}
          </InView>
        ))}
      </div>
    </section>
  );
}

export default Projects;