import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ImpactCases from "./components/ImpactCases.jsx";
import AutomationScale from "./components/AutomationScale.jsx";
import GithubActivity from "./components/GithubActivity.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import EngineeringMetrics from "./components/EngineeringMetrics.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Dedication from "./components/Dedication.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Dashboard />
      <ImpactCases />
      <AutomationScale />
      <GithubActivity />
      <Skills />
      <Projects />
      <Timeline />
      <EngineeringMetrics />
      <Testimonials />
      <Contact />
      <Dedication />
    </div>
  );
}
