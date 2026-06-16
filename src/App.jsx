import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Milan.dev</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Milan Kumar Singh</span>
          </h1>

          <p>
            Frontend Developer passionate about creating beautiful
            and responsive web experiences.
          </p>

          <div className="hero-buttons">
            <button>View Projects</button>
            <button className="secondary">Contact Me</button>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <div className="glass-card">
          <p>
            I am learning React, JavaScript, HTML and CSS while
            building modern websites and web applications.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Modern React portfolio website.</p>
          </div>

          <div className="project-card">
            <h3>Landing Page</h3>
            <p>Responsive HTML/CSS website.</p>
          </div>

          <div className="project-card">
            <h3>Future Project</h3>
            <p>Your next awesome project.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="glass-card">
          <p>Email: yourmail@example.com</p>
          <p>GitHub: github.com/yourgithub</p>
        </div>
      </section>

      <footer>
        © 2026 Milan Kumar Singh
      </footer>
    </div>
  );
}

export default App;