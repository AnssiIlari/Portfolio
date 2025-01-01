import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './Skills.css';

function Skills() {
    const skills = [
      'Programming Languages: C#, JavaScript, TypeScript, Python, Java, PHP',
      'Frontend: React, React Native, HTML, CSS',
      'Backend: Node.js, PHP, REST APIs',
      'Databases: SQL (MariaDB, MySQL, PostgreSQL), NoSQL (MongoDB, Firebase)',
      'DevOps & CI/CD: Docker, Jenkins',
      'CMS: ProcessWire',
      'Testing: Jest, Mocha, Chai, Cypress, React Testing Library',
      'Mobile Development: React Native',
      'Cybersecurity: Cisco Certified Hacker',
      'Machine Learning: scikit-learn, Keras, NumPy, Pandas, PyPlot, Azure ML',
      'RPA: UiPath',
      'Linux/Server Environments: Ubuntu, Nginx, SSH, server configuration, Cron jobs , firewall management',
    ];
  
    return (
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <ul>
            {skills.map((skill, index) => {
              const [title, details] = skill.split(': ');
              return (
                <InView triggerOnce key={index}>
                  {({ inView, ref }) => (
                    <motion.li
                      ref={ref}
                      className="skill-item"
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 }}
                    >
                      <strong>{title}:</strong> <span>{details}</span>
                    </motion.li>
                  )}
                </InView>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }

export default Skills;