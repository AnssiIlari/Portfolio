import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function WorkExperience() {
  const jobs = [
    {
      id: 1,
      title: 'Web Developer Trainee',
      duration: 'September 2024 - Present',
      responsibilities: [
        'Developed and maintained websites (PHP, CMS)',
        'Designed, developed, and maintained mobile applications (React Native, JavaScript, TypeScript)',
        'Managed server environments (Linux, Ubuntu, Nginx)',
      ],
    },
    {
      id: 2,
      title: 'Waste Truck Driver',
      duration: 'January 2013 - August 2024',
      responsibilities: ['Managed daily waste collection routes'],
    },
    // Add more jobs as needed
  ];

  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      {jobs.map((job, index) => (
        <InView triggerOnce key={job.id}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, delay: index * 0.2 }}
              className={`job job${job.id}`}
            >
              <h3>{job.title}</h3>
              <p>{job.duration}</p>
              {job.responsibilities.map((responsibility, idx) => (
                <p key={idx}>{responsibility}</p>
              ))}
            </motion.div>
          )}
        </InView>
      ))}
    </section>
  );
}


export default WorkExperience;