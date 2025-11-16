import { Link } from "react-router-dom";

interface ServiceCardProps {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
}

const ServiceCard = ({ slug, title, excerpt, tags, image }: ServiceCardProps) => (
  <Link to={`/services/${slug}`} className="project-thumb__link service-thumb__link">
    <article className="project-thumb service-thumb">
      <div className="project-thumb__media">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-thumb__content">
        <p className="eyebrow">Service</p>
        <h3>{title}</h3>
        <p className="desc">{excerpt}</p>
        <div className="tag-row">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  </Link>
);

export default ServiceCard;

