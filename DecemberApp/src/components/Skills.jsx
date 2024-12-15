import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
    const skills = [
      'Programming Languages: C#, JavaScript, TypeScript, Python, Java, PHP',
      'Frontend: React, React Native, HTML, CSS',
      'Backend: Node.js, PHP, REST APIs',
      'Databases: SQL (MariaDB, MySQL, PostgreSQL), NoSQL (MongoDB, Firebase)',
      'CMS: ProcessWire',
      'Testing: Jest, Mocha, Chai, Cypress',
      'Mobile Development: React Native',
      'Cybersecurity: Cisco Certified Hacker',
      'Machine Learning: scikit-learn, Keras, NumPy, Pandas, PyPlot, Azure ML',
      'RPA: UiPath',
      'Linux/Server Environments: Ubuntu, Nginx',
    ];
  
    return (
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    );
  }

export default Skills;