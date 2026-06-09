import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../Reveal';
import './Contact.css';

const CONTACT_LINKS = [
  { icon: HiMail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: HiPhone, label: 'Phone', value: PROFILE.phone, href: PROFILE.phoneHref },
  { icon: HiLocationMarker, label: 'Location', value: PROFILE.location, href: null },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: PROFILE.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'View my code', href: PROFILE.github },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <Reveal>
        <h2 id="contact-heading" className="section-heading">
          Contact <span>Me</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <ul className="contact__info">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="contact__info-item">
              <Icon aria-hidden="true" className="contact__info-icon" />
              <div>
                <span className="contact__info-label">{label}</span>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={200}>
        {submitted ? (
          <div className="contact__success" role="status">
            <p>Thanks for reaching out! I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required autoComplete="name" />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required autoComplete="email" />
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" />
              </div>
              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows={6} required />
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              Send Message
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
};

export default Contact;
