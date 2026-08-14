import Navbar from '../components/Navbar';
import Timer from '../components/Timer';
import TeamCard from '../components/TeamCard';
import Podium from '../components/Podium';
import { teams, podium } from '../data/teams';
import './home.css';

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      <section className="hero" id="home">
        <div className="hero__inner">
          <span className="eyebrow">DriveBlaze 2026 &middot; UEM Kolkata</span>
          <h1 className="hero__title">
            HACK<span className="hero__title--accent">SYNTHESIS</span>
          </h1>
          <p className="hero__desc">
            800 teams entered. 15 made the final circuit. One 30-hour build
            window stands between them and the podium.
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num mono">800</span>
              <span className="hero__stat-label mono">Teams entered</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num mono">15</span>
              <span className="hero__stat-label mono">Finalists</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num mono">30h</span>
              <span className="hero__stat-label mono">Build window</span>
            </div>
          </div>
        </div>
      </section>

      <section className="podium-section">
        <div className="section-head">
          <span className="eyebrow">Finalist standings</span>
          <h2>The podium</h2>
          <p className="section-desc">
            Reserved for the top three teams. Results are declared once
            judging closes at the end of the 30-hour window.
          </p>
        </div>
        <Podium podium={podium} />
      </section>

      <section className="finalists" id="finalists">
        <div className="section-head">
          <span className="eyebrow">Out of 800 &middot; top 15</span>
          <h2>Finalist grid</h2>
          <p className="section-desc">
            Every team below cleared two rounds of screening. Member details
            will be filled in as teams check in.
          </p>
        </div>

        <div className="finalist-grid">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
          <Timer />
          <div className="stat-tile" style={{ gridArea: 'stat' }}>
            <span className="stat-tile__num mono">01</span>
            <span className="stat-tile__label mono">Winner announced here</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-head">
          <span className="eyebrow">Get in touch</span>
          <h2>Contact the organizers</h2>
        </div>
        <div className="contact__grid">
          <div className="contact__card">
            <span className="mono contact__label">Email</span>
            <span>connect@driveblaze.tech</span>
          </div>
          <div className="contact__card">
            <span className="mono contact__label">Venue</span>
            <span>UEM Kolkata &middot; September 19&ndash;20, 2026</span>
          </div>
          <div className="contact__card">
            <span className="mono contact__label">Results</span>
            <a href="/results">View top 3 &rarr;</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="mono">HACKSYNTHESIS // DRIVEBLAZE 2026</span>
        <span className="mono">UEM KOLKATA</span>
      </footer>
    </div>
  );
}
