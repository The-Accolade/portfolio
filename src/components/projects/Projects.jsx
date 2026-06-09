import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { PROJECTS, PROJECTS_META } from '../../data/projects';
import { Reveal } from '../Reveal';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <Reveal>
        <h2 id="projects-heading" className="section-heading">
          Featured <span>Projects</span>
        </h2>
        <p className="projects__intro">
          Selected client and personal work — live sites deployed on custom domains and{' '}
          <a href={PROJECTS_META.netlifyTeamUrl} target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
          . More code on{' '}
          <a href={PROJECTS_META.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </Reveal>

      <div className="projects__grid">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.slug} delay={index * 60} className="project-card">
            <article className="project-card__inner">
              <div className="project-card__header">
                <h3>{project.name}</h3>
                <span className="project-card__badge">Live</span>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__tags" aria-label={`Technologies used in ${project.name}`}>
                {project.topics.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="project-card__links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <FaGithub aria-hidden="true" />
                    Code
                  </a>
                )}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link project-card__link--live"
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  Live Site
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="projects__footer">
          <p>{PROJECTS.length} featured projects · all with live demos</p>
          <a
            href={`${PROJECTS_META.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            View all repositories
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;
