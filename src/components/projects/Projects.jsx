import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { PROJECTS, PROJECTS_META } from '../../data/projects.generated';
import { Reveal } from '../Reveal';
import './Projects.css';

const Projects = () => {
  const withLive = PROJECTS.filter((p) => p.liveUrl);

  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <Reveal>
        <h2 id="projects-heading" className="section-heading">
          Featured <span>Projects</span>
        </h2>
        <p className="projects__intro">
          Pulled from my{' '}
          <a href={`https://github.com/${PROJECTS_META.githubUser}`} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          repos, with live demos hosted on{' '}
          <a href={PROJECTS_META.netlifyTeamUrl} target="_blank" rel="noopener noreferrer">
            Netlify
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
                {project.liveUrl && (
                  <span className="project-card__badge">Live</span>
                )}
              </div>

              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__tags" aria-label={`Technologies used in ${project.name}`}>
                {[project.language, ...project.topics.filter((t) => t !== project.language)]
                  .filter(Boolean)
                  .slice(0, 4)
                  .map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
              </ul>

              <div className="project-card__links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  <FaGithub aria-hidden="true" />
                  Code
                </a>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--live"
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    Live Demo
                  </a>
                ) : (
                  <span className="project-card__link project-card__link--disabled">
                    <SiNetlify aria-hidden="true" />
                    Not deployed
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="projects__footer">
          <p>
            {withLive.length} live demos · {PROJECTS.length} featured repos · Updated {PROJECTS_META.fetchedAt}
          </p>
          <a
            href={`https://github.com/${PROJECTS_META.githubUser}?tab=repositories`}
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
