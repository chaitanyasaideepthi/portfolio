import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/skills/skills.jsx";
import Services from "./components/Services/Services.jsx";
import Project from "./components/Projects/Projects.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import ContactSection from "./components/ContactSection/contact.jsx";

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