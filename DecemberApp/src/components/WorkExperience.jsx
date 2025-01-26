import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import './WorkExperience.css';

function WorkExperience() {
  const jobs = [
    {
      id: 1,
      title: 'Web Developer Trainee',
      company: 'Molentum',
      companyLink: 'https://molentum.fi/',
      duration: 'September 2024 - January 2025',
      responsibilities: [
        'Developed and maintained websites (PHP, CMS)',
        'Designed, developed, and maintained mobile applications (React Native, JavaScript, TypeScript)',
        'Managed server environments (Linux, Ubuntu, Nginx)',
      ],
      backgroundImage: 'url(/molentum2.png)',
    },
    {
      id: 2,
      title: 'Waste Truck Driver',
      company: 'Verdis',
      companyLink: 'https://verdis.fi/',
      duration: 'January 2013 - August 2024',
      responsibilities: ['Managed daily waste collection routes'],
      backgroundImage: 'url(/verdis.png)',
    },
    // Add more jobs as needed
  ];

  return (
    <section id="work-experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {jobs.map((job, index) => (
          <InView triggerOnce key={job.id}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="experience-card"
                style={{ backgroundImage: job.backgroundImage }}
              >
                <div className="experience-content">
                  <h3>{job.title}</h3>
                  <span className="experience-duration">{job.duration}</span>
                  {job.responsibilities.map((responsibility, idx) => (
                    <p key={idx}>{responsibility}</p>
                  ))}
                </div>
                <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className="company-link">
                  {job.company}
                </a>
              </motion.div>
            )}
          </InView>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;