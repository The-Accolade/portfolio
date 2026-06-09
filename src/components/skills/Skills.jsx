import { PROFILE } from '../../data/profile';
import { Reveal } from '../Reveal';
import './Skills.css';

const SkillGroup = ({ title, skills, delay = 0 }) => (
  <Reveal delay={delay} className="skill-group">
    <h3 className="skill-group__title">{title}</h3>
    <ul className="skill-tags" aria-label={title}>
      {skills.map((skill) => (
        <li key={skill} className="skill-tag">{skill}</li>
      ))}
    </ul>
  </Reveal>
);

const Skills = () => {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <Reveal>
        <h2 id="skills-heading" className="section-heading">
          Skills &amp; <span>Expertise</span>
        </h2>
      </Reveal>

      <div className="skills__grid">
        <SkillGroup title="Technical Proficiency" skills={PROFILE.technicalSkills} delay={100} />
        <SkillGroup title="Educational & Training" skills={PROFILE.educationalSkills} delay={150} />
        <SkillGroup title="Professional Soft Skills" skills={PROFILE.softSkills} delay={200} />
      </div>
    </section>
  );
};

export default Skills;
