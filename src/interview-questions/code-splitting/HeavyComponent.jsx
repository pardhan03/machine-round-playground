import React from 'react'
import './style.css'

const HeavyComponent = () => {
    return (
        <div className="status-card is-heavy">
            <div className="card-header">
                <div className="icon-box">💎</div>
                <div>
                    <h3 className="card-title">Advanced Analytics</h3>
                    <p className="card-desc">Heavyweight data engine</p>
                </div>
            </div>
            <p className="card-desc">
                Lazy loaded to improve initial performance. Contains complex chart libraries and deep data processing.
            </p>
            <div className="details-grid">
                <div className="detail-pill">D3.js Core</div>
                <div className="detail-pill">Lodash Utils</div>
                <div className="detail-pill">Complex SVG</div>
                <div className="detail-pill">2.4MB Chunk</div>
            </div>
        </div>
    )
}

export default HeavyComponent