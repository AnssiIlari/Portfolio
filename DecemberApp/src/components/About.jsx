import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css';

function About() {

  const aboutTextPart1 = `Welcome to my portfolio! I’m Anssi Laitinen, a soon-to-be graduate in Business Information Technology from Karelia University of Applied Sciences. Specializing in full-stack development, I have hands-on experience with languages and frameworks such as C#, Python, Java, JavaScript, TypeScript, React, and React Native. During my time as a Web Developer Trainee, I developed and maintained web and mobile applications and managed server environments.`;

  const aboutTextPart2 = `I am passionate about continuous learning and thrive on solving real-world problems. Fluent in both Finnish and English. My goal is to build robust, scalable applications that make a meaningful impact and to grow continuously as a professional in the IT field.`;

  const aboutTextPart3 = `I am currently seeking a full-time position as a Software Developer or similar role. If you have any questions or would like to discuss a potential project, feel free to contact me!`;

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
              <p className="about-text">{aboutTextPart2}</p>
              <p className="about-text">{aboutTextPart3}</p>
            </motion.div>
          )}
        </section>
      )}
    </InView>
  );
}

export default About;