import PageSection from "../components/PageSection";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const Services = () => (
  <PageSection>
    <article className="services-page">
      <header className="section-heading">
        <p className="eyebrow">Services</p>
        <h1>Landscaping and maintenance services</h1>
        <p>
          We handle most types of domestic outdoor work. Below is an overview of our main services. Click any service to
          see more detail, examples of what is included and how we work.
        </p>
      </header>
      <div className="projects-grid services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            slug={service.slug}
            title={service.title}
            excerpt={service.excerpt}
            tags={service.tags}
            image={service.image}
          />
        ))}
      </div>
      <p className="services-outro">
        Not sure what you need? Give Liam a ring on 07702 252453 and we'll talk it through with you.
      </p>
    </article>
  </PageSection>
);

export default Services;

