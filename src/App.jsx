import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ImpactCases from "./components/ImpactCases.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import EngineeringMetrics from "./components/EngineeringMetrics.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Dedication from "./components/Dedication.jsx";

// Carregados sob demanda: essas três seções concentram o uso do recharts (biblioteca pesada),
// então ficam num chunk separado em vez de inflar o bundle inicial.
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const AutomationScale = lazy(() => import("./components/AutomationScale.jsx"));
const GithubActivity = lazy(() => import("./components/GithubActivity.jsx"));

function SectionFallback({ minHeight }) {
  return <div className={`animate-pulse bg-white/[0.02]`} style={{ minHeight }} />;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback minHeight="480px" />}>
        <Dashboard />
      </Suspense>
      <ImpactCases />
      <Suspense fallback={<SectionFallback minHeight="560px" />}>
        <AutomationScale />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="420px" />}>
        <GithubActivity />
      </Suspense>
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
