import Navbar from '../components/Navbar';
import Timer from '../components/Timer';
import './home.css';

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      {/* ---------- Hero ---------- */}
      <section className="hero" id="home">
        <div className="hero__inner">
          <span className="eyebrow">
            DriveBlaze 2026 &middot; UEM Kolkata
          </span>

          <h1 className="hero__title">
            HACK<span className="hero__title--accent">SYNTHESIS</span>
          </h1>

          <p className="hero__desc">
            800 teams entered. 18 made the final circuit. One 30-hour build
            window stands between them and the podium.
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num mono">800</span>
              <span className="hero__stat-label mono">
                Teams entered
              </span>
            </div>

            <div className="hero__stat">
              <span className="hero__stat-num mono">18</span>
              <span className="hero__stat-label mono">
                Finalists
              </span>
            </div>

            <div className="hero__stat">
              <span className="hero__stat-num mono">30h</span>
              <span className="hero__stat-label mono">
                Build window
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Timer ---------- */}
      <section className="finalists" id="finalists">
        <div className="section-head">
          <span className="eyebrow">
            DriveBlaze 2026
          </span>

          <h2>Hackathon Timer</h2>

          <p className="section-desc">
            The countdown is currently running. Stay focused, keep building,
            and make every second count.
          </p>
        </div>

        <div className="finalist-grid">
          <Timer />
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="contact" id="contact">
        <div className="section-head">
          <span className="eyebrow">
            Get in touch
          </span>

          <h2>Contact the organizers</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__card">
            <span className="mono contact__label">
              Email
            </span>

            <span>
              connect@driveblaze.tech
            </span>
          </div>

          <div className="contact__card">
            <span className="mono contact__label">
              Venue
            </span>

            <span>
              UEM Kolkata &middot; September 19&ndash;20, 2026
            </span>
          </div>

          <div className="contact__card">
            <span className="mono contact__label">
              Results
            </span>

            <a href="/results">
              View results &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <span className="mono">
          HACKSYNTHESIS // DRIVEBLAZE 2026
        </span>

        <span className="mono">
          UEM KOLKATA
        </span>
      </footer>
    </div>
  );
}