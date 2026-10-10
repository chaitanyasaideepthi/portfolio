function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <div className="nav-links">
        <a href="#home" className="active">
          Home
        </a>

        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;