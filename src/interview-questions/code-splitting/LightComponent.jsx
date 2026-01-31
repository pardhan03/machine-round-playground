import React from 'react'
import './style.css'

const LightComponent = () => {
    return (
        <div className="status-card is-light">
            <div className="card-header">
                <div className="icon-box">⚡</div>
                <div>
                    <h3 className="card-title">Main Bundle</h3>
                    <p className="card-desc">Low-latency rendering</p>
                </div>
            </div>
            <p className="card-desc">
                This component is part of the initial payload. It's lightweight and interactive immediately.
            </p>
        </div>
    )
}

export default LightComponent