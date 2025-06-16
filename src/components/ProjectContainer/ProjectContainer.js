import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className="project" onClick={() => project.livePreview && window.open(project.livePreview, '_blank')}>
    {project.image && project.livePreview && (
      <a href={project.livePreview} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.name} className="project__image" />
      </a>
    )}

    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>

    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    <div className="project__links">
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="source code"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="live preview"
          className="link link--icon"
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  </div>
);

export default ProjectContainer;
