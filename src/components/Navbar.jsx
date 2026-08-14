import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/#home' },
  { label: 'Finalists', href: '/#finalists' },
  { label: 'Timer', href: '/timer', isRoute: true },
  { label: 'Results', href: '/results', isRoute: true },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand">
          <span className="nav__mark"><img src="/logo.png" alt="" /></span>
          <span className="nav__wordmark">
            HACK<span className="nav__wordmark--accent">SYNTHESIS 3.0</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_ITEMS.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className={`nav__link ${location.pathname === item.href ? 'is-active' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="nav__link">
                {item.label}
              </a>
            )
          )}
        </nav>

        <a href="/#timer" className="nav__cta">
          <span className="nav__cta-dot" />
          Live Status
        </a>
      </div>
    </header>
  );
}
