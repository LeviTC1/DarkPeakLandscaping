import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  tags: string[];
  image?: string;
  to?: string;
}

const ProjectCard = ({ title, description, location, tags, image, to }: ProjectCardProps) => {
  const content = (
    <article className="project-thumb">
      {image && (
        <div className="project-thumb__media">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="project-thumb__content">
        <p className="eyebrow">{location}</p>
        <h3>{title}</h3>
        <p className="desc">{description}</p>
        <div className="tag-row">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  if (to) {
    return (
      <Link to={to} className="project-thumb__link">
        {content}
      </Link>
    );
  }

  return content;
};

export default ProjectCard;
