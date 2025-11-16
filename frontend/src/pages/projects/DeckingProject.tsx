import PageSection from "../../components/PageSection";
import Button from "../../components/Button";
import deckingHero from "../../assets/projects/Decking/Decking2.jpg";
import decking1 from "../../assets/projects/Decking/Decking1.jpg";
import decking3 from "../../assets/projects/Decking/Decking3.jpg";
import decking4 from "../../assets/projects/Decking/Decking4.jpg";
import decking5 from "../../assets/projects/Decking/Decking5.jpg";

const gallery = [decking1, decking3, decking4, decking5];

const DeckingProject = () => (
  <PageSection>
    <article className="project-detail">
      <header className="project-detail__lead">
        <div>
          <p className="eyebrow">Showcase</p>
          <h1>Decking rebuild - Whaley Bridge</h1>
          <p>
            The original decking had become spongy and dangerous, so we stripped it back to the posts, rebuilt the frame
            with treated timber and added composite boards that can handle High Peak weather. The refreshed platform now
            gives the client a solid, low-maintenance seating area that ties into the rest of the garden.
          </p>
        </div>
        <img src={deckingHero} alt="Completed composite decking seating area" />
      </header>

      <section className="project-detail__gallery">
        {gallery.map((photo) => (
          <figure key={photo}>
            <img src={photo} alt="Decking project progress" />
          </figure>
        ))}
      </section>

      <section className="project-detail__list">
        <h2>Key highlights</h2>
        <ul>
          <li>Rotten boards and joists removed and responsibly disposed of.</li>
          <li>New treated subframe levelled and fixed with galvanised brackets.</li>
          <li>Composite deck boards installed with hidden fixings.</li>
          <li>Smart fascia boards conceal the frame for a tidy finish.</li>
          <li>Finished with matching trim pieces and sealant-ready surfaces.</li>
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

export default DeckingProject;
