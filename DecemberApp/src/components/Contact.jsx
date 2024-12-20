import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import './Contact.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("mqakvkbp");
    if (state.succeeded) {
        return <p>Thanks for contacting me!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Your Email:
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Your Message:
            </label>
            <textarea
                id="message"
                name="message"
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

function Contact() {

    const [showForm, setShowForm] = useState(false);

    return (
        <InView triggerOnce>
            {({ inView, ref }) => (
                <section id="contact" ref={ref} className={showForm ? 'contact-expanded' : ''}>
                    {inView && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {!showForm ? (
                                <button onClick={() => setShowForm(true)}>Contact</button>
                            ) : (
                                <>
                                <h2>Contact Me</h2>
                                <ContactForm />
                            </>
                            )}
                        </motion.div>
                    )}
                </section>
            )}
        </InView>
    );
}

export default Contact;