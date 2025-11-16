import PageSection from "../components/PageSection";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import patioHero from "../assets/projects/PatioProject/Patio1.jpg";
import gardenPathHero from "../assets/projects/GardenPathProject/GardenPath1.jpg";
import circularPatioHero from "../assets/projects/CircularPatio/CircularPatio1.jpg";
import woodenSleeperRaisedBedHero from "../assets/projects/WoodenSleeperRaisedBed/WoodenSleeperRaisedBed1.jpg";
import gardenOverhaulHero from "../assets/projects/GardenOverhaul/GardenOverhaul1.jpg";
import deckingHero from "../assets/projects/Decking/Decking2.jpg";

const projects = [
  {
    title: "Patio project",
    location: "Whaley Bridge",
    description:
      "Custom Indian stone patio with an octagonal feature and hand-cut detailing for a seamless tie-in.",
    tags: ["Patio", "Stonework", "MOT sub-base"],
    image: patioHero,
    to: "/projects/patio-project",
  },
  {
    title: "Garden path rebuild",
    location: "Disley",
    description:
      "New stepping stone path with a compacted base, gravel drainage border and fresh lawn edge.",
    tags: ["Pathway", "Stonework", "Drainage"],
    image: gardenPathHero,
    to: "/projects/garden-path-project",
  },
  {
    title: "Circular patio build",
    location: "New Mills",
    description: "Circular seating area with fresh sub-base, setts and gravel edge to tie into the garden.",
    tags: ["Patio", "Stonework"],
    image: circularPatioHero,
    to: "/projects/circular-patio",
  },
  {
    title: "Sleeper raised beds and planting",
    location: "Hayfield",
    description: "New oak sleepers formed into stepped beds with fresh topsoil and herb planting.",
    tags: ["Joinery", "Planting", "Sleeper work"],
    image: woodenSleeperRaisedBedHero,
    to: "/projects/wooden-sleeper-raised-bed",
  },
  {
    title: "Garden overhaul",
    location: "Buxton",
    description: "Full tidy-up with raised beds, gravel seating and new planting pockets for a fresh layout.",
    tags: ["Landscaping", "Sleeper work", "Gravel"],
    image: gardenOverhaulHero,
    to: "/projects/garden-overhaul",
  },
  {
    title: "Decking replacement",
    location: "Whaley Bridge",
    description: "Removed rotten boards and rebuilt the treated decking frame with low-maintenance composite boards.",
    tags: ["Decking", "Carpentry"],
    image: deckingHero,
    to: "/projects/decking-project",
  },
];

const Projects = () => (
  <PageSection>
    <div className="projects-page">
      <header className="section-heading">
        <p className="eyebrow">Projects</p>
        <h1>Recent projects</h1>
        <p>
          A few examples of the work we carry out across Whaley Bridge and the wider High Peak. Every garden is
          different, but these projects capture our approach to solid groundwork, tidy finishes and reliable service.
        </p>
      </header>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="projects-cta">
        <p>Have a project in mind? Get in touch for a free quote.</p>
        <Button to="/contact">Request a free quote</Button>
      </div>
    </div>
  </PageSection>
);

export default Projects;


