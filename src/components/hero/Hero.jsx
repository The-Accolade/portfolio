import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import HeroImage from '../../assets/images/Hero-img.png';
import { PROFILE } from '../../data/profile';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Reveal } from '../Reveal';
import './Hero.css';

const SOCIAL_LINKS = [
  { href: PROFILE.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
  { href: PROFILE.github, icon: FaGithub, label: 'GitHub' },
  { href: `mailto:${PROFILE.email}`, icon: HiMail, label: 'Email' },
  { href: PROFILE.phoneHref, icon: HiPhone, label: 'Phone' },
];

const Hero = () => {
  const role = useTypewriter(PROFILE.roles);

  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero__content">
        <Reveal>
          <p className="hero__eyebrow">{PROFILE.location} · Available for opportunities</p>
        </Reveal>

        <Reveal delay={100}>
          <h1 id="hero-heading" className="hero__title">
            Hi, I am <span className="hero__name">{PROFILE.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero__role" aria-live="polite">
            <span className="hero__role-text">{role}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="hero__bio">{PROFILE.heroSummary}</p>
        </Reveal>

        <Reveal delay={400}>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Hire Me</a>
            <a href={`mailto:${PROFILE.email}`} className="btn btn--ghost">Let&apos;s Talk</a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <ul className="hero__social" aria-label="Contact and social links">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => {
              const isExternal = href.startsWith('http');
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                    aria-label={label}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={200} className="hero__visual">
        <div className="hero__image-wrap">
          <img src={HeroImage} alt={`Portrait of ${PROFILE.name}`} width={400} height={400} />
          <div className="hero__glow" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
