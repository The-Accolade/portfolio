import AboutImage from '../../assets/images/about-img-2.png';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../Reveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <Reveal>
        <h2 id="about-heading" className="section-heading">
          About <span>Me</span>
        </h2>
      </Reveal>

      <div className="about__grid">
        <Reveal delay={100} className="about__visual">
          <div className="about__image-wrap">
            <img src={AboutImage} alt={PROFILE.name} width={280} height={280} loading="lazy" />
            <div className="about__ring" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={200} className="about__content">
          <p className="about__label">{PROFILE.title} · {PROFILE.subtitle}</p>
          <p className="about__text">{PROFILE.summary}</p>
          <p className="about__text about__text--muted">{PROFILE.educationNote}</p>

          <div className="about__qualification">
            <span className="about__qualification-label">Education</span>
            <p>{PROFILE.education.degree} · {PROFILE.education.institution}</p>
          </div>

          <dl className="about__stats">
            {PROFILE.stats.map(({ value, label }) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="about__achievements">
          <h3 className="about__achievements-title">Key Achievements</h3>
          <ul className="about__achievements-grid">
            {PROFILE.achievements.map(({ title, description }) => (
              <li key={title} className="about__achievement-card">
                <h4>{title}</h4>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
