import React, { useState } from "react";
import MemoizedCard from "./MemoizedCard";
import CustomComparatorCard from "./CustomComparatorCard";
import "./MemoChallenge.css";

const ReactMemoApp = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // This object gets a NEW reference every render
  // but the ID inside remains the same unless 'count' changes
  const userData = {
    details: { id: count, name: "Manish" }
  };

  return (
    <div className="memo-challenge-wrapper">
      <header className="hero-section">
        <h1 className="home-title">React.memo Deep Dive</h1>
        <p className="home-subtitle">Manual Comparison vs. Shallow Checks</p>
      </header>

      <div className="search-container memo-controls">
        <button className="hold-button" onClick={() => setToggle(!toggle)}>
          Re-render Parent (State: {String(toggle)})
        </button>
        <button className="hold-button secondary" onClick={() => setCount(prev => prev + 1)}>
          Update User ID ({count})
        </button>
      </div>

      <div className="challenge-grid">
        {/* Standard Memo: Will re-render on EVERY parent toggle because userData is a new ref */}
        <MemoizedCard
          title="Shallow Memo"
          data={userData}
          type="unstable"
        />

        {/* Custom Memo: Will NOT re-render on toggle, ONLY when ID changes */}
        <CustomComparatorCard user={userData} />
      </div>

      <div className="interview-notes">
        <h3>The "Second Parameter" Logic</h3>
        <p>In this demo, <strong>Shallow Memo</strong> fails because it sees a new object reference every time the "Re-render Parent" button is clicked.</p>
        <p><strong>Custom Comparator</strong> succeeds because we told React: <em>"Only update if <code>prev.id !== next.id</code>."</em></p>
      </div>
    </div>
  );
};

export default ReactMemoApp;