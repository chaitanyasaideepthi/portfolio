function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and modern websites using HTML, CSS, JavaScript and React.js."
    },
    {
      title: "Web Development",
      description:
        "Creating user-friendly websites with clean and responsive designs."
    },
    {
      title: "UI Development",
      description:
        "Converting designs into attractive and responsive web interfaces."
    }
  ];

  return (
    <section className="section" id="services">

      <h2 className="section-title">
        My <span>Services</span>
      </h2>

      <div className="services-container">

        {services.map((service) => (
          <div className="service-card" key={service.title}>

            <div className="service-icon">
              &lt;/&gt;
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;