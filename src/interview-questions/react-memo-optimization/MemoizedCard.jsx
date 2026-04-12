import React from "react";

const MemoizedCard = React.memo(({ title, data, type }) => {
  return (
    <div className={`challenge-card memo-demo-card ${type === 'unstable' ? 'warning' : 'success'}`}>
      <div className="card-icon">{type === 'primitive' ? 'P' : 'NP'}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>Prop Value: {typeof data === 'object' ? JSON.stringify(data) : String(data)}</p>
        <span className="render-tag">Rendered: {new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
});

export default MemoizedCard;