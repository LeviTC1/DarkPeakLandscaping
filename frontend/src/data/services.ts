import landscapingImg from "../assets/services/landscaping-and-design.jpg";
import patiosImg from "../assets/services/patios-and-paths.jpg";
import pointingImg from "../assets/services/pointing-and-stonework.jpg";
import turfImg from "../assets/services/turfing-and-lawn-care.jpg";
import fencingImg from "../assets/services/fencing-and-boundaries.jpg";
import maintenanceImg from "../assets/services/general-maintenance.jpg";

export interface Service {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  bullets: string[];
  tags: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "landscaping-and-design",
    title: "Landscaping & garden design",
    excerpt: "Full garden makeovers, new layouts and planting schemes that work year-round.",
    description:
      "From blank slates to overgrown spaces, we plan and build gardens that suit how you actually live. Levels, drainage, access, sunlight and maintenance all get considered so you end up with a space that works in real life, not just in photos.",
    bullets: [
      "Full or partial garden redesigns",
      "New seating areas and paths",
      "Raised beds, planters and edging",
      "Sleeper work and retaining details",
      "Planting schemes and turfing",
    ],
    tags: ["Design", "Landscaping", "Planting"],
    image: landscapingImg,
  },
  {
    slug: "patios-and-paths",
    title: "Flagging, patios and paths",
    excerpt: "Indian stone patios, pathways and steps built with proper bases and drainage.",
    description:
      "A good patio should drain properly, feel solid underfoot and stay neat for years. We excavate to the right depth, install compacted sub-bases and lay flags accurately before pointing everything cleanly.",
    bullets: [
      "New patios in natural or concrete flags",
      "Pathways, garden steps and seating pads",
      "Repairs to existing patios",
      "Lifting and relaying sunken or loose flags",
      "Repointing joints for a tidy finish",
    ],
    tags: ["Patios", "Flagging", "Drainage"],
    image: patiosImg,
  },
  {
    slug: "pointing-and-stonework",
    title: "Pointing and stonework",
    excerpt: "Stop water getting in by repairing and repointing walls, steps and paving.",
    description:
      "The High Peak climate is tough on stone. Frost and water quickly open up joints which then let in more moisture. We repoint and repair walls, steps and flags to protect your hard landscaping.",
    bullets: [
      "Repointing garden walls",
      "Repointing steps and flagstone joints",
      "Small stone repairs and rebuilds",
      "Mortar matched to existing finishes",
    ],
    tags: ["Stonework", "Repairs", "Weatherproofing"],
    image: pointingImg,
  },
  {
    slug: "turfing-and-lawn-care",
    title: "Turfing and lawn care",
    excerpt: "Fresh turf, reseeding and soil preparation to keep your lawn healthy.",
    description:
      "Whether you want a brand-new lawn or to rescue a tired one, we take care of the prep that makes grass last. From ground levelling and drainage tweaks to the first cuts, everything is handled for you.",
    bullets: [
      "Removal of old turf and weeds",
      "Ground preparation and levelling",
      "Topsoil, drainage and conditioning",
      "Laying new turf or seeding bare areas",
      "First cuts and basic lawn care advice",
    ],
    tags: ["Turfing", "Soil prep", "Lawn care"],
    image: turfImg,
  },
  {
    slug: "fencing-and-boundaries",
    title: "Fencing, gates and boundaries",
    excerpt: "Secure, tidy boundaries supplied and fitted to suit your garden style.",
    description:
      "Good fencing keeps your garden secure, private and tidy. We supply and fit new timber panels, gates and posts or repair what you already have so the perimeter looks smart again.",
    bullets: [
      "Closeboard, featheredge and panel fencing",
      "Concrete or timber posts and gravel boards",
      "Garden gates, latches and hardware",
      "Fence repairs and replacements",
      "Custom heights and styles",
    ],
    tags: ["Fencing", "Boundaries", "Gates"],
    image: fencingImg,
  },
  {
    slug: "general-maintenance",
    title: "General maintenance & tidy-ups",
    excerpt: "Seasonal visits or one-off tidy-ups to keep everything under control.",
    description:
      "Ideal if you just need things bringing back under control or keeping on top of. We handle hedges, shrubs, weeds and clear-outs so the garden always feels cared for.",
    bullets: [
      "Hedge trimming and reductions",
      "Shrub and border tidy-ups",
      "Weed control on beds and hard surfaces",
      "Leaf and debris clear-outs",
      "Pressure washing patios and drives",
    ],
    tags: ["Maintenance", "Hedges", "Clean-ups"],
    image: maintenanceImg,
  },
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));
