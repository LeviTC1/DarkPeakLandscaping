import PageSection from "../../components/PageSection";
import Button from "../../components/Button";
import gardenOverhaulHero from "../../assets/projects/GardenOverhaul/GardenOverhaul3.jpg";
import gardenOverhaul1 from "../../assets/projects/GardenOverhaul/GardenOverhaul1.jpg";
import gardenOverhaul2 from "../../assets/projects/GardenOverhaul/GardenOverhaul2.jpg";
import gardenOverhaul4 from "../../assets/projects/GardenOverhaul/GardenOverhaul4.jpg";
import gardenOverhaul5 from "../../assets/projects/GardenOverhaul/GardenOverhaul5.jpg";

const gallery = [gardenOverhaul1, gardenOverhaul2, gardenOverhaul4, gardenOverhaul5];

const GardenOverhaulProject = () => (
  <PageSection>
    <article className="project-detail">
      <header className="project-detail__lead">
        <div>
          <p className="eyebrow">Showcase</p>
          <h1>Garden overhaul - Buxton</h1>
          <p>
            This space was a mix of tired turf and weeds. We stripped everything back, installed new sleeper beds, fresh
            gravel seating areas and low-maintenance planting pockets. It now feels organised, bright and easy for the
            owners to keep on top of throughout the seasons.
          </p>
        </div>
        <img src={gardenOverhaulHero} alt="Completed garden overhaul with raised beds" loading="lazy" />
      </header>

      <section className="project-detail__gallery">
        {gallery.map((photo) => (
          <figure key={photo}>
            <img src={photo} alt="Garden overhaul project progress" loading="lazy" />
          </figure>
        ))}
      </section>

      <section className="project-detail__list">
        <h2>Key highlights</h2>
        <ul>
          <li>Old turf, debris and rotten edging fully removed.</li>
          <li>Sleepers installed to frame new beds and retain levels.</li>
          <li>Weed membrane and golden gravel for clean seating zones.</li>
          <li>Fresh topsoil and compost for shrubs, grasses and herbs.</li>
          <li>Finished with mulch and a tidy stone path for year-round access.</li>
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

export default GardenOverhaulProject;
