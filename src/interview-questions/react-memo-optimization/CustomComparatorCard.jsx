import React from "react";

const CustomComparatorCard = ({ user }) => {
  return (
    <div className="challenge-card memo-demo-card success">
      <div className="card-icon">D</div>
      <div className="card-content">
        <h3>Custom Comparator</h3>
        <p>User ID: <span className="highlight">{user.details.id}</span></p>
        <p className="sub-text">I ignore reference changes if the ID is the same.</p>
        <span className="render-tag">Rendered: {new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

// The Second Parameter: Custom Comparison Function
// Becuse in case of non-primitive data types react.memo doesn't work properly
// That's why we use this
const areEqual = (prevProps, nextProps) => {
  // Return true if you want to SKIP re-render
  // We only care if the nested ID changed
  return prevProps.user.details.id === nextProps.user.details.id;
};

export default React.memo(CustomComparatorCard, areEqual);