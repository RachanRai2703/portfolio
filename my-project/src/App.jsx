```jsx
import './App.css'

function App() {
  return (
    <div>

      <nav>
        <div className="logo">Shamitha</div>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">

        <div className="hero-content">

          <h1>Shamitha Shetty P</h1>

          <h3>QC Executive • Microbiologist • Quality Professional</h3>

          <p>
            Experienced QC Executive specializing in quality control,
            microbiological testing, food safety systems, laboratory analysis
            and GMP compliance.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="#" className="btn secondary">Download Resume</a>
          </div>

        </div>

      </section>

      <section id="about">
        <h2>Career Objective</h2>

        <div className="card">
          <p>
            A motivated QC Executive and quality professional with experience
            in dairy and ice cream manufacturing. Skilled in quality monitoring,
            laboratory testing, documentation and food safety compliance.
          </p>
        </div>
      </section>

      <section id="experience">

        <h2>Professional Experience</h2>

        <div className="card">

          <h3>QC Executive</h3>

          <p>Hangyo Ice Creams Pvt. Ltd., Heroor, India</p>

          <ul>
            <li>Conduct Internal FSMS audits.</li>
            <li>Handle customer complaints.</li>
            <li>Perform microbiological testing.</li>
            <li>Maintain QC documentation.</li>
            <li>Ensure GMP and hygiene compliance.</li>
          </ul>

        </div>

      </section>

      <section id="education">

        <h2>Education</h2>

        <div className="grid">

          <div className="card">
            <h3>M.Sc Microbiology</h3>
            <p>CGPA: 6.91</p>
          </div>

          <div className="card">
            <h3>Bachelor of Science</h3>
            <p>72.94%</p>
          </div>

          <div className="card">
            <h3>PUC</h3>
            <p>66.3%</p>
          </div>

          <div className="card">
            <h3>SSLC</h3>
            <p>80.64%</p>
          </div>

        </div>

      </section>

      <section id="skills">

        <h2>Skills</h2>

        <div className="grid">

          <div className="card">Quality Control</div>
          <div className="card">Microbiology</div>
          <div className="card">Food Safety</div>
          <div className="card">HPLC</div>
          <div className="card">FTIR</div>
          <div className="card">Documentation</div>

        </div>

      </section>

      <section id="contact">

        <h2>Contact</h2>

        <div className="card">

          <p>Email: shettyshamithap4@gmail.com</p>

          <p>Phone: 7624821565</p>

          <div className="hero-buttons">

            <a
              href="mailto:shettyshamithap4@gmail.com"
              className="btn"
            >
              Email
            </a>

            <a
              href="tel:+917624821565"
              className="btn"
            >
              Call
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App
```
