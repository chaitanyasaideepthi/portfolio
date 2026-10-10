import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services";
import Project from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import ContactSection from "./components/ContactSection/contact";

import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Services */}
      <Services />

      {/* Projects */}
      <Project />

      {/* Certificates */}
      <Certificates />

      {/* Contact */}
      <ContactSection />
    </>
  );
}

export default App;