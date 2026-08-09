import React, { useState } from 'react';
import './style.css'

const BatchUpdate = () => {
    const [count, setCount] = useState(0);
    const [log, setLog] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);

    const addLog = (msg) => {
        setLog((prev) => [msg, ...prev.slice(0, 4)]);
    };

    const handleClick = () => {
        setIsUpdating(true);

        // In React 18+, synchronous batching updates using state snapshot:
        // count + 1 and count + 2 get superseded by count + 3 in the initial render frame.
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 2);
        setCount((prev) => prev + 3);
        addLog('Sync updates applied (+3 total)');

        // Async batched updates executed after 1s delay
        setTimeout(() => {
            setCount((prev) => prev + 4);
            setCount((prev) => prev + 5);
            addLog('Async updates applied (+9 total)');
            setIsUpdating(false);
        }, 1000);
    };

    const handleReset = () => {
        setCount(0);
        setLog([]);
        setIsUpdating(false);
    };

    return (
        <div className="batch-card-container">
            <div className="batch-card">
                {/* Header */}
                <div className="batch-header">
                    <div>
                        <h2 className="batch-title">State Batching</h2>
                        <p className="batch-subtitle">Demonstrating React state queue</p>
                    </div>
                    <button onClick={handleReset} className="batch-reset-btn">
                        Reset
                    </button>
                </div>

                {/* Display */}
                <div className="batch-counter-box">
                    <span className="batch-counter-label">Current Value</span>
                    <span className="batch-counter-value">{count}</span>
                </div>

                {/* Action Button */}
                <button
                    onClick={handleClick}
                    disabled={isUpdating}
                    className="batch-action-btn"
                >
                    {isUpdating ? (
                        <>
                            <span className="spinner" />
                            Processing Updates...
                        </>
                    ) : (
                        'Trigger Batch Updates'
                    )}
                </button>

                {/* Update Log */}
                {log.length > 0 && (
                    <div className="batch-log-container">
                        <span className="batch-log-title">Update Sequence:</span>
                        <ul className="batch-log-list">
                            {log.map((item, idx) => (
                                <li key={idx} className="batch-log-item">
                                    <span className="batch-log-dot" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BatchUpdate;