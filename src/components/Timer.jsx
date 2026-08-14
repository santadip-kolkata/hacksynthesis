import { Link } from 'react-router-dom';
import './timer.css';

export default function Timer() {
  return (
    <Link to="/timer" className="timer" id="timer">
      <div className="timer__ring-wrap">
        <svg className="timer__ring" viewBox="0 0 200 200">
          <circle className="timer__ring-track" cx="100" cy="100" r="84" />
          <circle className="timer__ring-tick" cx="100" cy="16" r="2" />
        </svg>
        <div className="timer__core">
          <span className="timer__label">BUILD CLOCK</span>
          <div className="timer__digits mono">30:00:00</div>
          <span className="timer__sub mono">HH : MM : SS</span>
        </div>
      </div>
      <span className="timer__launch mono">Open full-screen timer &rarr;</span>
    </Link>
  );
}
