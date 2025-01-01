import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css';

function About() {

  const aboutTextPart1 = `Hello! I’m Anssi Laitinen, a soon-to-be graduate in Business Information Technology from Karelia University of Applied Sciences. My main focus is on full-stack development, but I’m passionate about all aspects of the IT field—whether it’s front-end, back-end, DevOps, AI/ML, cybersecurity, testing, or anything in between.`;

  const aboutTextPart3 = `Through my experience as a Web Developer Trainee, I’ve built and maintained a range of web and mobile applications, overseen server environments, and worked with various programming languages and frameworks.`;

  const aboutTextPart4 = `I’m currently looking for a full-time position (Software Developer or similar) but am open to exploring any exciting opportunity in the IT domain. Feel free to reach out if you’d like to collaborate or discuss potential projects!`;


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