import PageSection from "../components/PageSection";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import ContactStrip from "../components/ContactStrip";
import { services as allServices } from "../data/services";
import heroLogo from "../assets/logo.jpg";

const processSteps = [
  {
    title: "Quick chat & visit",
    text: "Tell us what you need and we'll arrange a convenient time to visit and measure up.",
  },
  {
    title: "Clear written quote",
    text: "You get a simple quote with everything included, so you know exactly what you're paying for.",
  },
  {
    title: "Agreed start date",
    text: "We agree a start date that works for you and keep you updated if the weather causes any changes.",
  },
  {
    title: "Tidy, respectful work",
    text: "We turn up when we say we will, keep things tidy and treat your property with respect.",
  },
  {
    title: "Walk-through & aftercare",
    text: "We walk you through the finished job and explain how to look after your new patio, turf or fencing.",
  },
];

const Home = () => {
  const featuredServices = allServices.slice(0, 6);

  return (
    <>
      <PageSection>
        <div className="hero">
          <div className="hero__content">
            <p className="eyebrow">Dark Peak Landscaping &amp; Maintenance</p>
            <h1>Landscaping that stands up to the Dark Peak weather</h1>
            <p>
              Dark Peak Landscaping and Maintenance design, build and look after outdoor spaces across Whaley Bridge and
              the High Peak. From patios and flagging to fencing and turfing, we create gardens that look smart all year
              round.
            </p>
            <div className="hero__actions">
              <Button to="/contact">Request a free quote</Button>
              <Button to="/projects" variant="secondary">
                View recent projects
              </Button>
            </div>
            <p className="hero__contact">Call Liam on 07702 252453 or email liamthorpe52@gmail.com</p>
          </div>
          <div className="hero__media" aria-hidden="true">
            <img src={heroLogo} alt="" loading="lazy" />
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="trust-strip">
          <ul className="trust-list">
            {[
              "Local to Whaley Bridge",
              "Friendly, reliable service",
              "Fully insured",
              "No-obligation quotes",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection>
        <div className="stack">
          <div className="section-heading">
            <p className="eyebrow">Key services</p>
            <h2>What we do</h2>
            <p>We handle everything from full garden makeovers to simple one-day tidy-ups. No job too small.</p>
          </div>
          <div className="grid grid--services">
            {featuredServices.map((service) => (
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
        </div>
      </PageSection>

      <PageSection background="muted">
        <div className="stack">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>Simple, straightforward process</h2>
          </div>
          <div className="process">
            {processSteps.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="service-area">
          <p className="eyebrow">Service area</p>
          <h2>Proudly serving the High Peak</h2>
          <p>
            We're based in Whaley Bridge and work across the surrounding area, including New Mills, Chapel-en-le-Frith,
            Furness Vale, Disley, Buxton and nearby villages. If you're not sure whether we cover your area, just get in
            touch and ask.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <ContactStrip />
      </PageSection>
    </>
  );
};

export default Home;
