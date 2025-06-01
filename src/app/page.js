import About from './sections/About';
import Hero from './sections/Hero';
import Project from './sections/Project';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
export default function HomePage() {
  return (
    <div className="text-white bg-black">
      <Hero />
      <About />
      <Project />
      <Skills />
      <Timeline />
    </div>
  );
}
