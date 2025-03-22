import Headers from "./Headers";
import Hero from "./Hero";
import Project from "./Project";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Headers />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default Home;
