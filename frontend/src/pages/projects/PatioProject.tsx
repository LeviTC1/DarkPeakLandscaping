import PageSection from "../../components/PageSection";
import Button from "../../components/Button";
import patioHero from "../../assets/projects/PatioProject/Patio1.jpg";
import patioTwo from "../../assets/projects/PatioProject/Patio2.jpg";
import patioThree from "../../assets/projects/PatioProject/Patio3.jpg";
import patioFour from "../../assets/projects/PatioProject/Patio4.jpg";
import patioFive from "../../assets/projects/PatioProject/Patio5.jpg";

const gallery = [patioTwo, patioThree, patioFour, patioFive];

const PatioProject = () => (
  <PageSection>
    <article className="project-detail">
      <header className="project-detail__lead">
        <div>
          <p className="eyebrow">Showcase</p>
          <h1>Patio project - Whaley Bridge</h1>
          <p>
            A tired concrete yard was transformed into a versatile outdoor space. We designed a custom octagonal layout,
            installed a compacted MOT sub-base and hand-cut each flag for a seamless finish. The patio now ties in with
            the existing paving and gravel and gives the client a calm seating area that is ready for everyday use.
          </p>
        </div>
        <img src={patioHero} alt="Finished Indian stone patio" loading="lazy" />
      </header>

      <section className="project-detail__gallery">
        {gallery.map((photo) => (
          <figure key={photo}>
            <img src={photo} alt="Patio project progress" loading="lazy" />
          </figure>
        ))}
      </section>

      <section className="project-detail__list">
        <h2>Key highlights</h2>
        <ul>
          <li>Fully prepared and compacted MOT sub-base for longevity.</li>
          <li>Custom octagonal centrepiece set out with laser levels.</li>
          <li>Every flag measured, cut and laid by hand.</li>
          <li>Smooth transition into existing paving and gravel areas.</li>
          <li>Perfectly level surface ready for furniture and pots.</li>
          <li>Built to handle High Peak weather all year round.</li>
        </ul>
        <div className="project-detail__actions">
          <Button to="/contact#request-quote">Request a free quote</Button>
          <Button to="/projects" variant="secondary">
            Back to projects
          </Button>
        </div>
      </section>
    </article>
  </PageSection>
);

export default PatioProject;



