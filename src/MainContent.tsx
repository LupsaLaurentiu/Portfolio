import AboutMe from "./MainComponent/AboutMe";
import Education from "./MainComponent/Education";
import Experience from "./MainComponent/Experience";
import Projects from "./MainComponent/Projects";
import SectionNavigation from "./MainComponent/SectionNavigation";
import Skills from "./MainComponent/Skills";

export default function MainContent() {
  return (
    <>
      <SectionNavigation />

      <main className="flex-1 md:ml-12">
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </main>
    </>
  );
}