import PageSection from "../components/PageSection";

const values = [
  {
    title: "Straightforward communication",
    text: "No jargon, no pressure. Just clear explanations of what we recommend and why.",
  },
  {
    title: "Quality over shortcuts",
    text: "We prepare bases properly, use the right materials and take the time to get levels and drainage right.",
  },
  {
    title: "Respect for your home and neighbours",
    text: "We keep noise and disruption to a minimum, protect access routes and tidy up at the end of each day.",
  },
];

const About = () => (
  <PageSection>
    <article className="about-page">
      <header className="section-heading">
        <p className="eyebrow">About</p>
        <h1>About Dark Peak Landscaping</h1>
        <p>
          Dark Peak Landscaping and Maintenance is run by local landscaper Liam Thorpe, based in Whaley Bridge. We focus on doing a proper job, turning up when we say we will and leaving every garden tidy.
        </p>
        <p>
          After years of working on outdoor jobs around the High Peak, Liam set up Dark Peak Landscaping to offer a reliable, straightforward service for local homeowners. Knowing the area means we understand the challenges that come with steep plots, heavy rain and mixed ground conditions.
        </p>
      </header>

      <section className="values">
        <h2>What matters to us</h2>
        <div className="grid grid--values">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-practical">
        <h3>Practical bits</h3>
        <ul>
          <li>Based in Whaley Bridge, working across the High Peak and surrounding areas.</li>
          <li>Fully insured for domestic landscaping and maintenance work.</li>
          <li>Happy to provide references and photos of similar jobs on request.</li>
        </ul>
      </section>

      <aside className="owner-card">
        <p className="eyebrow">Owner</p>
        <h3>Liam Thorpe</h3>
        <p>Owner, Dark Peak Landscaping and Maintenance</p>
        <p>Local to the area, used to working in all weathers.</p>
      </aside>
    </article>
  </PageSection>
);

export default About;





