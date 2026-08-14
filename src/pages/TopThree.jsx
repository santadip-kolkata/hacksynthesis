import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { podium } from '../data/teams';
import './topthree.css';

export default function TopThree() {
  return (
    <div className="page results-page">
      <Navbar />

      <section className="results-hero">
        <span className="eyebrow">Hacksynthesis &middot; Final results</span>
        <h1>Top 3</h1>

        {!podium.declared && (
          <div className="results-status">
            <span className="results-status__dot" />
            <span className="mono">RESULTS WILL BE DECLARED AFTER THE HACKATHON CONCLUDES</span>
          </div>
        )}
      </section>

      <section className="results-podium">
        <div className="results-slot results-slot--silver">
          <span className="mono results-slot__place">2ND</span>
          <div className="results-slot__plate">
            {podium.declared ? (
              <span className="results-slot__team">{podium.second}</span>
            ) : (
              <>
                <span className="results-slot__icon mono">--</span>
                <span className="mono results-slot__pending">Pending</span>
              </>
            )}
          </div>
        </div>

        <div className="results-slot results-slot--gold">
          <span className="mono results-slot__place">1ST</span>
          <div className="results-slot__plate">
            {podium.declared ? (
              <span className="results-slot__team">{podium.first}</span>
            ) : (
              <>
                <span className="results-slot__icon mono">--</span>
                <span className="mono results-slot__pending">Pending</span>
              </>
            )}
          </div>
        </div>

        <div className="results-slot results-slot--bronze">
          <span className="mono results-slot__place">3RD</span>
          <div className="results-slot__plate">
            {podium.declared ? (
              <span className="results-slot__team">{podium.third}</span>
            ) : (
              <>
                <span className="results-slot__icon mono">--</span>
                <span className="mono results-slot__pending">Pending</span>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="results-back">
        <Link to="/#finalists">&larr; Back to finalist grid</Link>
      </div>

      <footer className="footer">
        <span className="mono">HACKSYNTHESIS // DRIVEBLAZE 2026</span>
        <span className="mono">UEM KOLKATA</span>
      </footer>
    </div>
  );
}
