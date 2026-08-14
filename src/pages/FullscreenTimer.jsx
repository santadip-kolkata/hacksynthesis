import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCountdown, pad, TOTAL_SECONDS } from '../hooks/useCountdown';
import './fullscreentimer.css';

export default function FullscreenTimer() {
  const {
    h, m, sec, running, setRunning, progress, isComplete, setManual, reset,
  } = useCountdown(TOTAL_SECONDS);

  const [showSet, setShowSet] = useState(false);
  const [inputH, setInputH] = useState(h);
  const [inputM, setInputM] = useState(m);
  const [inputS, setInputS] = useState(sec);

  const circumference = 2 * Math.PI * 260;
  const dashOffset = circumference * (1 - progress);

  function applyManualSet() {
    setManual(inputH, inputM, inputS);
    setShowSet(false);
  }

  function openInputsWithCurrent() {
    setInputH(h);
    setInputM(m);
    setInputS(sec);
    setShowSet((v) => !v);
  }

  return (
    <div className={`fs-timer ${isComplete ? 'is-complete' : ''}`}>
      <Link to="/#finalists" className="fs-timer__back mono">
        &larr; Back to Hacksynthesis
      </Link>

      <div className="fs-timer__eyebrow eyebrow">Hacksynthesis &middot; Build clock</div>

      <div className="fs-timer__ring-wrap">
        <svg className="fs-timer__ring" viewBox="0 0 560 560">
          <circle className="fs-timer__ring-track" cx="280" cy="280" r="260" />
          <circle
            className="fs-timer__ring-progress"
            cx="280"
            cy="280"
            r="260"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
          <circle className="fs-timer__ring-tick" cx="280" cy="40" r="4" />
        </svg>

        <div className="fs-timer__core">
          <span className="fs-timer__label mono">
            {isComplete ? 'TIME UP' : running ? 'IN PROGRESS' : 'STANDBY'}
          </span>
          <div className="fs-timer__digits mono">
            {pad(h)}<span>:</span>{pad(m)}<span>:</span>{pad(sec)}
          </div>
          <span className="fs-timer__sub mono">HH : MM : SS &middot; 30-HOUR WINDOW</span>
        </div>
      </div>

      <div className="fs-timer__controls">
        <button
          className={`fs-timer__btn ${running ? 'is-pause' : 'is-start'}`}
          onClick={() => setRunning((r) => !r)}
          disabled={isComplete}
        >
          {running ? 'Pause' : 'Start'}
        </button>
        <button className="fs-timer__btn" onClick={reset}>
          Reset 30:00:00
        </button>
        <button className="fs-timer__btn" onClick={openInputsWithCurrent}>
          Set time
        </button>
      </div>

      {showSet && (
        <div className="fs-timer__set">
          <label>
            HH
            <input type="number" min="0" max="99" value={inputH} onChange={(e) => setInputH(e.target.value)} />
          </label>
          <label>
            MM
            <input type="number" min="0" max="59" value={inputM} onChange={(e) => setInputM(e.target.value)} />
          </label>
          <label>
            SS
            <input type="number" min="0" max="59" value={inputS} onChange={(e) => setInputS(e.target.value)} />
          </label>
          <button className="fs-timer__btn is-apply" onClick={applyManualSet}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
