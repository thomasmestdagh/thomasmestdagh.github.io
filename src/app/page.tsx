import Image from "next/image";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Projects from "./components/Projects";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavMenu />
      <Header id="header" />
      <Section id="about" title="about me" bgColor="#473C50">
        <About />
      </Section>
      <Section id="projects" title="some of my latest work" bgColor="#27212C">
        <Projects />
      </Section>
      <Section id="contact" title="contact me" bgColor="#473C50">
        <Contact />
      </Section>
      <Footer />
    </>
  );
}
