import PageSection from "../../components/PageSection";
import Button from "../../components/Button";
import circularPatioHero from "../../assets/projects/CircularPatio/CircularPatio1.jpg";
import circularPatio2 from "../../assets/projects/CircularPatio/CircularPatio2.jpg";
import circularPatio3 from "../../assets/projects/CircularPatio/CircularPatio3.jpg";
import circularPatio4 from "../../assets/projects/CircularPatio/CircularPatio4.jpg";
import circularPatio5 from "../../assets/projects/CircularPatio/CircularPatio5.jpg";

const gallery = [circularPatio2, circularPatio3, circularPatio4, circularPatio5];

const CircularPatioProject = () => (
  <PageSection>
    <article className="project-detail">
      <header className="project-detail__lead">
        <div>
          <p className="eyebrow">Showcase</p>
          <h1>Circular patio build - New Mills</h1>
          <p>
            A muddy corner of the garden never got used, so we designed a circular patio that makes the most of the
            morning sun. The area was dug out, built up with compacted MOT and finished with natural stone setts that tie
            into the existing paths. The curved seating area now doubles as a focal point from the house.
          </p>
        </div>
        <img src={circularPatioHero} alt="Completed circular patio with stone setts" />
      </header>

      <section className="project-detail__gallery">
        {gallery.map((photo) => (
          <figure key={photo}>
            <img src={photo} alt="Circular patio project progress" />
          </figure>
        ))}
      </section>

      <section className="project-detail__list">
        <h2>Key highlights</h2>
        <ul>
          <li>Ground reduced, edged out and compacted with Type 1 for a rock-solid base.</li>
          <li>Laser-set levels ensure perfect drainage away from the house.</li>
          <li>Hand-cut stone setts laid on full beds for tight joints.</li>
          <li>Curved gravel border blends into existing planting.</li>
          <li>Finished surface sealed and ready for furniture the same week.</li>
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

export default CircularPatioProject;
