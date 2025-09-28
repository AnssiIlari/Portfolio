import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import './Education.css';

function Education() {
  const educationList = [
    {
      school: 'University of Eastern Finland',
      degree: 'Master of Science, Computer Science',
      period: '2025 - 2029 (estimated)',
      backgroundImage: 'url(/uef.png)',
    },
    {
      school: 'Karelia University of Applied Sciences',
      degree: 'Bachelor of Business Administration, Business Information Technology',
      period: '2022 - 2025',
      backgroundImage: 'url(/kareliaa.jpg)',
    },
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationList.map((edu, index) => (
          <InView triggerOnce key={edu.school + edu.period}>
            {({ inView, ref }) => (
              <motion.div
                className="education-card"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.5 }}
                style={{ backgroundImage: edu.backgroundImage }}
              >
                <h3>{edu.school}</h3>
                <h4>{edu.degree}</h4>
                <span className="education-period">{edu.period}</span>
              </motion.div>
            )}
          </InView>
        ))}
      </div>
    </section>
  );
}

export default Education;
