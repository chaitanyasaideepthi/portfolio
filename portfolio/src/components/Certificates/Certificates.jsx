
import "./Certificates.css";

const certificates = [
  {
    title: "Certificate 1",
    image: "certificate1.png",
  },
  {
    title: "Certificate 2",
    image: "certificate2.png",
  },
  {
    title: "Certificate 3",
    image: "certificate3.png",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-heading">
        <h2>
          My <span>Certificates</span>
        </h2>
        <p>My certificates and achievements.</p>
      </div>

      <div className="certificates-container">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.title}>
            <div className="certificate-image">
              <img
                src={`${import.meta.env.BASE_URL}images/${certificate.image}`}
                alt={certificate.title}
                loading="lazy"
              />
            </div>

            <div className="certificate-content">
              <h3>{certificate.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;



