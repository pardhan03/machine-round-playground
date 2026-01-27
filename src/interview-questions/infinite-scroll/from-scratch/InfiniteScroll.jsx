import React, { useState } from 'react'
import './infinite-scroll.css'
import { generateDummyData } from '../../../shared/utils/helper';

const PAGE_SIZE = 10;

const InfiniteScroll = () => {
    const [items, setItems] = useState(generateDummyData(12, 0));

    return (
        <div className="app-viewport">
            <nav className="internal-nav">
                <a href="#" className="back-link">← Back to Dashboard</a>
                <span className="current-challenge">Infinite Scroll Lab</span>
            </nav>

            <div className="home-container">
                <header className="hero-section">
                    <h1 className="home-title">Developer Challenges</h1>
                    <p className="home-subtitle">Scroll down to discover more projects.</p>
                </header>

                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search projects..." />
                </div>

                <div className="challenge-grid">
                    {items.map((item) => (
                        <div key={item.id} className="challenge-card">
                            {/* Using your existing card-icon class for the image wrapper */}
                            <div className="card-icon">
                                <img src={item.image} alt="thumb" className="card-thumb" />
                            </div>
                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <p className="card-desc">{item.description}</p>
                                <span className="solve-btn">View Details →</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* This div triggers the loading logic when it enters the viewport */}
                {/* <div ref={observerTarget} className="loading-state">
                    {isLoading && <div className="spinner">Fetching more items...</div>}
                </div> */}
            </div>
        </div>
    )
}

export default InfiniteScroll