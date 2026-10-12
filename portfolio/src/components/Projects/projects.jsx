import "./Projects.css";

const projects = [
  {
    title: "Job Portal",
    image: "/images/job portal.png",
    description:
      "A job portal web application built using React.js that helps users explore job opportunities through a user-friendly interface.",
    technologies: ["React.js", "JavaScript", "CSS", "Firebase"],
    link: "https://job-xi-eight.vercel.app/",
  },
  {
    title: "OOSA Healthcare",
    image: "/images/oosa.png",
    description:
      "A modern healthcare company website built using React.js with a clean, responsive user interface.",
    technologies: ["React.js", "HTML", "CSS"],
    link: "https://oosa-webpage.vercel.app/",
  },
  {
    title: "Weather Forecast App",
    image: "/images/weather.png",
    description:
      "A responsive weather application that displays weather information using a weather API.",
    technologies: ["React.js", "JavaScript", "REST API", "CSS"],
    link: "http://weather-forecast-f48wuyv3j-chaitanyasaideepthi.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <h2>
          My <span>Projects</span>
        </h2>

        <p>
          Here are some of the projects I've built to improve my skills and
          explore new technologies.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;