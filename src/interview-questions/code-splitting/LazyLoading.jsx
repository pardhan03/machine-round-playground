import React, { useState } from 'react'
import './style.css'

const LazyLoading = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className="app-viewport">
            <main className="home-container">
                <header className="hero-section">
                    <h1 className="home-title">Bundle Optimizer</h1>
                    <p className="home-subtitle">
                        Observe how the network payload changes when deferring heavy assets.
                    </p>
                </header>
                <div className="metrics-bar">
                    <div className="metric-item">
                        <span className="metric-label">Initial Load</span>
                        <span className="metric-value">Optimized</span>
                    </div>
                    <div className="metric-divider"></div>
                    <div className="metric-item">
                        <span className="metric-label">Code Splitting</span>
                        <span className="metric-value text-primary">Enabled</span>
                    </div>
                    <div className="metric-divider"></div>
                    <div className="metric-item">
                        <span className="metric-label">Chunk Status</span>
                        <span className={`metric-value ${isLoaded ? 'text-success' : 'text-muted'}`}>
                            {isLoaded ? 'Injected' : 'Deferred'}
                        </span>
                    </div>
                </div>
                {/* Challenge Content Area */}
                <div className="lazy-lab-grid">
                    {/* Your Light/Heavy components will live here */}
                </div>
            </main>
        </div>
    )
}

export default LazyLoading