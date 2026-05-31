import React, { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-content">
          <div className="logo">PM</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <br/><span className="gradient-text">Pradhikshalini</span></h1>
            <p>IT Undergraduate | Full Stack Developer | UI/UX Designer.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="Pradhikshalini_Professional_CV.pdf" target="_blank" className="btn btn-outline" download>Download CV</a>
            </div>
          </div>
          <div className="hero-image glass-panel">
            <h2 className="gradient-text" style={{ fontSize: '10rem', opacity: 0.8 }}>PM</h2>
          </div>
        </div>
      </section>

      <section id="about" className="container">
        <h2 className="section-title">About Me</h2>
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            I am an energetic and detail-oriented undergraduate passionate about technology, creativity, and problem-solving. 
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            I am skilled in programming, mobile app development, and database management, with strong communication and teamwork abilities. I have a continuous drive to learn and grow in the IT industry. Currently pursuing my BSc Hons in Information Technology at SLIIT.
          </p>
        </div>
      </section>

      <section id="skills" className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card glass-panel">
            <div className="skill-icon">💻</div>
            <h3>Programming</h3>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          <div className="skill-card glass-panel">
            <div className="skill-icon">🌐</div>
            <h3>Web Tech</h3>
            <div className="skill-tags">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Tailwind</span>
            </div>
          </div>
          <div className="skill-card glass-panel">
            <div className="skill-icon">🗄️</div>
            <h3>Databases</h3>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">XAMPP</span>
            </div>
          </div>
          <div className="skill-card glass-panel">
            <div className="skill-icon">🎨</div>
            <h3>UI/UX</h3>
            <div className="skill-tags">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Photoshop</span>
              <span className="skill-tag">Prototyping</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          
          <div className="project-card glass-panel">
            <img src="/img/web1.png" alt="Tech Product Rental" className="project-img" />
            <div className="project-content">
              <h3>Tech Product System</h3>
              <p>Inventory management module for a comprehensive tech product platform.</p>
              <div className="skill-tags" style={{ justifyContent: 'flex-start' }}>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="project-card glass-panel">
            <img src="/img/web2.png" alt="Booking Hub" className="project-img" />
            <div className="project-content">
              <h3>Booking Hub</h3>
              <p>Digital system for managing official campus passes and laboratory bookings.</p>
              <div className="skill-tags" style={{ justifyContent: 'flex-start' }}>
                <span className="skill-tag">Full Stack</span>
                <span className="skill-tag">UI Design</span>
              </div>
            </div>
          </div>

          <div className="project-card glass-panel">
            <img src="/img/web3.png" alt="Lost & Found" className="project-img" />
            <div className="project-content">
              <h3>Lost & Found Mobile App</h3>
              <p>High-fidelity UI/UX prototype and design for reporting and finding lost items.</p>
              <div className="skill-tags" style={{ justifyContent: 'flex-start' }}>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Mobile UI</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <p>0703352231</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>it23567856@my.sliit.lk</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Malabe, Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="https://github.com/PradhikshaliniMahendran" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'block', textAlign: 'center' }}>
                Visit GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/pradhikshalini-mahendran-1a466a267" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'block', textAlign: 'center' }}>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Pradhikshalini Mahendran. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
