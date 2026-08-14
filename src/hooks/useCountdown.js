import { useEffect, useRef, useState } from 'react';

export const TOTAL_SECONDS = 30 * 60 * 60; // 30 hours

export function pad(n) {
  return String(n).padStart(2, '0');
}

export function toHMS(totalSeconds) {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  return { h, m, sec };
}

export function useCountdown(initial = TOTAL_SECONDS) {
  const [remaining, setRemaining] = useState(initial);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  function setManual(h, m, s) {
    const clampedH = Math.min(99, Math.max(0, Number(h) || 0));
    const clampedM = Math.min(59, Math.max(0, Number(m) || 0));
    const clampedS = Math.min(59, Math.max(0, Number(s) || 0));
    setRemaining(clampedH * 3600 + clampedM * 60 + clampedS);
  }

  function reset() {
    setRunning(false);
    setRemaining(TOTAL_SECONDS);
  }

  const { h, m, sec } = toHMS(remaining);
  const progress = 1 - remaining / TOTAL_SECONDS;
  const isComplete = remaining === 0;

  return {
    remaining,
    running,
    setRunning,
    h,
    m,
    sec,
    progress,
    isComplete,
    setManual,
    reset,
  };
}
