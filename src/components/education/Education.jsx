import { HiCalendar } from 'react-icons/hi';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../Reveal';
import './Education.css';

const Timeline = ({ items }) => (
  <ol className="timeline">
    {items.map((item) => (
      <li key={item.title} className="timeline__item">
        <div className="timeline__marker" aria-hidden="true" />
        <article className="timeline__card">
          <time className="timeline__date">
            <HiCalendar aria-hidden="true" />
            {item.year}
          </time>
          <h4>{item.title}</h4>
          <ul className="timeline__highlights">
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </li>
    ))}
  </ol>
);

const Education = () => {
  return (
    <section id="experience" className="education" aria-labelledby="experience-heading">
      <Reveal>
        <h2 id="experience-heading" className="section-heading">
          Professional <span>Experience</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="experience-block">
          <h3 className="experience-block__title">Engineering</h3>
          <Timeline items={PROFILE.engineeringExperience} />
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="experience-block">
          <h3 className="experience-block__title">Teaching &amp; Mentorship</h3>
          <Timeline items={PROFILE.teachingExperience} />
        </div>
      </Reveal>
    </section>
  );
};

export default Education;
