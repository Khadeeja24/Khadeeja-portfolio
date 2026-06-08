import "./styles/Navbar.css";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="nav-gradient"></div>
      <header className="header">
        <a href="/" className="navbar-logo">KF<span>.</span></a>
        <a href="mailto:khadeejafaizan024@gmail.com" className="navbar-email">
          khadeejafaizan024@gmail.com
        </a>
        <ul>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About</a></li>
          <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollTo("work"); }}>Work</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a></li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
