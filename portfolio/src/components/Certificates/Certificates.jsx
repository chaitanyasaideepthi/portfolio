import "./Certificates.css";

function Certificates() {
  const certificates = [
    "/images/certificate1.png",
    "/images/certificate2.png",
    "/images/certificate3.png",
    "/images/certificate%204.jpeg",
    "/images/certificate%205.jpeg",
    "/images/certificate%206.jpeg",
  ];

  return (
    <section className="certificates" id="certificates">
      <h2>
        My <span>Certificates</span>
      </h2>

      <div className="certificate-container">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={certificate}
              alt={`Certificate ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
