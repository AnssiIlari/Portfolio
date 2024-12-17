import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function About() {
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
              <p>
                Welcome to my portfolio! I am a soon-to-graduate Bachelor of Business Information Technology.
              </p>
            </motion.div>
          )}
        </section>
      )}
    </InView>
  );
}

export default About;