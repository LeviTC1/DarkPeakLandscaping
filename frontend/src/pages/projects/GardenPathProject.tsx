import PageSection from "../../components/PageSection";
import Button from "../../components/Button";
import gardenPathHero from "../../assets/projects/GardenPathProject/GardenPath1.jpg";
import gardenPath2 from "../../assets/projects/GardenPathProject/GardenPath2.jpg";
import gardenPath3 from "../../assets/projects/GardenPathProject/GardenPath3.jpg";
import gardenPath4 from "../../assets/projects/GardenPathProject/GardenPath4.jpg";
import gardenPath5 from "../../assets/projects/GardenPathProject/GardenPath5.jpg";
import gardenPath6 from "../../assets/projects/GardenPathProject/GardenPath6.jpg";

const gallery = [gardenPath2, gardenPath3, gardenPath4, gardenPath5, gardenPath6];

const GardenPathProject = () => (
  <PageSection>
    <article className="project-detail">
      <header className="project-detail__lead">
        <div>
          <p className="eyebrow">Showcase</p>
          <h1>Garden path rebuild - Disley</h1>
          <p>
            The original stepping stones were uneven, mossy and difficult to walk on. We lifted everything, installed a
            compacted base and set new natural stone pieces with a charcoal edge. A gravel drainage border keeps the area
            dry and a crisp lawn edge finishes the walkway.
          </p>
        </div>
        <img src={gardenPathHero} alt="Completed garden path with stepping stones" />
      </header>

      <section className="project-detail__gallery">
        {gallery.map((photo) => (
          <figure key={photo}>
            <img src={photo} alt="Garden path project progress" />
          </figure>
        ))}
      </section>

      <section className="project-detail__list">
        <h2>Key highlights</h2>
        <ul>
          <li>Existing stones and tired edging removed.</li>
          <li>Compacted sub-base installed for stability.</li>
          <li>Natural stone stepping stones set with precise spacing.</li>
          <li>Charcoal block edge and gravel border for drainage.</li>
          <li>Neat lawn edge and refreshed planting strip.</li>
          <li>Finished surface that stays level and easy to walk on.</li>
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

export default GardenPathProject;



