import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css';

function About() {

  const aboutTextPart1 = `Hello! I’m Anssi Laitinen, a designer at Istekki Oy and a recent graduate in Business Information Technology from Karelia University of Applied Sciences.`;

  const aboutTextPart3 = `In my current role, I focus on system maintenance, documentation, testing and project work.`;

  const aboutTextPart4 = `Feel free to reach out if you’d like to discuss innovative projects, share ideas, or collaborate at the intersection of technology and healthcare. Let’s build solutions that matter!`;


  const linkedInUrl = "https://www.linkedin.com/in/anssi-laitinen-93a963269/";

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <section id="about" ref={ref}>
          {inView && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <h2>About Me</h2>
              <p className="about-text">{aboutTextPart1}</p>
              <p className="about-text">{aboutTextPart3}</p>
              <p className="about-text">{aboutTextPart4}</p>
              <a href={linkedInUrl} className="linkedin-button" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </motion.div>
          )}
        </section>
      )}
    </InView>
  );
}

export default About;