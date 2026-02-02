import React, { useEffect, useRef, useState } from 'react'
import './progress-bar.css'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  // Logic to handle the progression
  useEffect(() => {
    if (isActive && progress < 100) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          const nextValue = prev + 1;
          if (nextValue >= 100) {
            clearInterval(timerRef.current);
            setIsActive(false);
            return 100;
          }
          return nextValue;
        });
      }, 50);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, progress]);

  const handleReset = () => {
    setIsActive(false);
    setProgress(0);
  };
  return (
    <div className="app-viewport">
      <main className="home-container">
        <header className="hero-section">
          <h1 className="home-title">State Synchronization</h1>
          <p className="home-subtitle">Managing smooth transitions and concurrent progress states.</p>
        </header>

        <div className="progress-container">
          <div className="progress-header">
            <div>
              <span className={`status-badge ${progress === 100 ? 'status-complete' : 'status-loading'}`}>
                {progress === 100 ? '✓ Task Finished' : isActive ? '⟳ Syncing Data...' : '⏸ Paused'}
              </span>
              <h3 style={{ marginTop: '8px' }}>System Backup</h3>
            </div>
            <div className="percentage-display">{progress}%</div>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-controls">
            <button className="btn-secondary" onClick={handleReset}>
              Reset
            </button>
            <button
              className="btn-primary"
              onClick={() => setIsActive(!isActive)}
              disabled={progress === 100}
              style={{ minWidth: '120px' }}
            >
              {isActive ? 'Pause' : progress === 0 ? 'Start' : 'Resume'}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProgressBar