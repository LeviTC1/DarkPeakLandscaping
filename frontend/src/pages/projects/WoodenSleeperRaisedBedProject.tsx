import PageSection from "../../components/PageSection";
import Button from "../../components/Button";
import woodenSleeperRaisedBedHero from "../../assets/projects/WoodenSleeperRaisedBed/WoodenSleeperRaisedBed1.jpg";
import woodenSleeperRaisedBed2 from "../../assets/projects/WoodenSleeperRaisedBed/WoodenSleeperRaisedBed2.jpg";
import woodenSleeperRaisedBed3 from "../../assets/projects/WoodenSleeperRaisedBed/WoodenSleeperRaisedBed3.jpg";
import woodenSleeperRaisedBed4 from "../../assets/projects/WoodenSleeperRaisedBed/WoodenSleeperRaisedBed4.jpg";

const gallery = [woodenSleeperRaisedBed2, woodenSleeperRaisedBed3, woodenSleeperRaisedBed4];

const WoodenSleeperRaisedBedProject = () => (
  <PageSection>
    <article className="project-detail">
      <header className="project-detail__lead">
        <div>
          <p className="eyebrow">Showcase</p>
          <h1>Wooden sleeper raised beds - Hayfield</h1>
          <p>
            This sloping corner was hard to plant and even harder to mow. We set out new oak sleepers, stepped the beds
            to follow the ground and filled them with fresh topsoil and compost. The warm timber now frames the patio and
            gives the client tidy spaces for herbs, shrubs and seasonal colour.
          </p>
        </div>
        <img src={woodenSleeperRaisedBedHero} alt="Finished oak sleeper raised beds" loading="lazy" />
      </header>

      <section className="project-detail__gallery">
        {gallery.map((photo) => (
          <figure key={photo}>
            <img src={photo} alt="Wooden sleeper raised bed project progress" loading="lazy" />
          </figure>
        ))}
      </section>

      <section className="project-detail__list">
        <h2>Key highlights</h2>
        <ul>
          <li>Ground cleared, levelled and pegged out to take new sleepers.</li>
          <li>Oak sleepers fixed with rebar and coated ends for longevity.</li>
          <li>Stepped layout maximises planting depth across the slope.</li>
          <li>Fresh topsoil/compost blend delivered and barrowed in.</li>
          <li>Mulched finish keeps moisture in and weeds down.</li>
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

export default WoodenSleeperRaisedBedProject;
