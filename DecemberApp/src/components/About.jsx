import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css';

function About() {

  const aboutTextPart1 = `Welcome to my portfolio! I’m Anssi Laitinen, a soon-to-be graduate in Business Information Technology from Karelia University of Applied Sciences. Specializing in full-stack development, I have hands-on experience with languages and frameworks such as C#, Python, Java, JavaScript, TypeScript, React, and React Native. During my time as a Web Developer Trainee, I developed and maintained web and mobile applications and managed server environments.`;

  const aboutTextPart3 = `I am currently seeking a full-time position as a Software Developer or similar role. If you have any questions or would like to discuss a potential project, feel free to contact me!`;

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