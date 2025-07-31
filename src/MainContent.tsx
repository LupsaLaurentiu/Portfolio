import Skills from "./MainComponent/Skills";
import AboutMe from "./MainComponent/AboutMe";
import Education from "./MainComponent/Education";
import Experience from "./MainComponent/Experience";

export default function MainContent() {
  return (
    <main className="flex-1 md:ml-12">
        {/* About Me */}
        <AboutMe />
        {/* Skills */}
        <Skills />
        {/*Experience*/}
        <Experience/>
        {/*Education*/}
        <Education />
    </main>
  );
}
