import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppCTA from "./components/WhatsAppCTA";
import CallNowCTA from "./components/CallNowCTA";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PatioProject from "./pages/projects/PatioProject";
import GardenPathProject from "./pages/projects/GardenPathProject";
import CircularPatioProject from "./pages/projects/CircularPatioProject";
import WoodenSleeperRaisedBedProject from "./pages/projects/WoodenSleeperRaisedBedProject";
import GardenOverhaulProject from "./pages/projects/GardenOverhaulProject";
import DeckingProject from "./pages/projects/DeckingProject";
import ServiceDetail from "./pages/services/ServiceDetail";

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/patio-project" element={<PatioProject />} />
          <Route path="/projects/garden-path-project" element={<GardenPathProject />} />
          <Route path="/projects/circular-patio" element={<CircularPatioProject />} />
          <Route path="/projects/wooden-sleeper-raised-bed" element={<WoodenSleeperRaisedBedProject />} />
          <Route path="/projects/garden-overhaul" element={<GardenOverhaulProject />} />
          <Route path="/projects/decking-project" element={<DeckingProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppCTA />
      <CallNowCTA />
    </div>
  );
};

export default App;
