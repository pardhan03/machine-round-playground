import React from 'react';
import './HoldCounter.css'; // See CSS below
import useHoldCounter from '../../Custom-hooks/useHoldCounter';

const HoldCounter = () => {
  const { count, startIncrement, stopIncrement } = useHoldCounter({
    initial: 0,
    step: 1,
    delay: 100
  });

  return (
    <div className="hold-counter-container">
      <div className="counter-display">
        <span className="count-label">Current Count</span>
        <h1 className="count-number">{count}</h1>
      </div>

      <div className="interaction-area">
        <button
          className="hold-button"
          onMouseDown={startIncrement}
          onMouseUp={stopIncrement}
          onMouseLeave={stopIncrement}
          onTouchStart={startIncrement}
          onTouchEnd={stopIncrement}
        >
          Press and Hold to Increment
        </button>
        <p className="hint-text">Release to pause</p>
      </div>
    </div>
  );
};

export default HoldCounter;