function Hero() {
  return (
    <section className="hero" id="home">

      {/* Left Side Content */}
      <div className="hero-content">

        <p className="hello">
          Hello, I am 👋
        </p>

        <h1>
          Chaitanya Sai Deepthi
        </h1>

        <h2>
          I'm a <span>Frontend Developer</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly websites
          using HTML, CSS, JavaScript , React.js , Rest API and Github
        </p>

        {/* Social Links */}
        <div className="social-links">

          {/* GitHub */}
          <a
            href="https://github.com/chaitanyasaideepthi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            Git
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chundi-chaitanya-sai-deepthi-bb524b330/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          {/* Email */}
          <a
            href="mailto:chundichaithanya5@gmail.com"
            aria-label="Email"
          >
            ✉
          </a>

        </div>

        {/* Connect Button */}
        <a
          href="#contact"
          className="connect-btn"
        >
          Let's Connect →
        </a>

      </div>


      {/* Right Side Profile Image */}
      <div className="hero-image-container">

        {/* Outer Glow */}
        <div className="circle-glow"></div>

        {/* Profile Image */}
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="profile-image"
        />

        {/* Floating Circles */}
        <div className="floating-circle circle-one"></div>

        <div className="floating-circle circle-two"></div>

        <div className="floating-circle circle-three"></div>

      </div>

    </section>
  );
}

export default Hero;