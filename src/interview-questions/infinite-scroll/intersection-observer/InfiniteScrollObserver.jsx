import React, { useEffect, useRef, useState } from 'react'
import './infinite-scroll.css'
import { generateDummyData } from '../../../shared/utils/helper';

// |-----------------------------|  ← document.body.scrollHeight -> entrire height event the
// |                             |  ← The total height of the entire webpage content, including the part you can’t see yet without scrolling.
// |   page content              |
// |                             |
// |        viewport           |  ← window.innerHeight
// |-----------------------------|
//           ↑
//      window.scrollY


const PAGE_SIZE = 10;
const MAX_ITEMS = 50;

const InfiniteScrollObserver = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    
    const observer = useRef();


    return (
        <div className="app-viewport">
            <div className="home-container">
                <header className="hero-section">
                    <h1 className="home-title">Developer Challenges</h1>
                    <p className="home-subtitle">
                        Scroll down to discover more projects.
                    </p>
                </header>

                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search projects..."
                    />
                </div>

                <div className="challenge-grid">
                    {items.map(item => (
                        <div key={item.id} className="challenge-card">
                            <div className="card-icon">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-thumb"
                                />
                            </div>

                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <p className="card-desc">{item.description}</p>
                                <span className="solve-btn">
                                    View Details →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {loading && (
                    <div className="loading-state">
                        <div className="spinner">
                            Fetching more items...
                        </div>
                    </div>
                )}

                {!hasMore && (
                    <p className="end-message">
                        🎉 You’ve reached the end
                    </p>
                )}
            </div>
        </div>
    );
};

export default InfiniteScrollObserver