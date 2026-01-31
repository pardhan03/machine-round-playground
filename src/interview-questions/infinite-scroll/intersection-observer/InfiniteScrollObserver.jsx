import React, { useEffect, useRef, useState } from 'react'
import './infinitescroll.css'

// |-----------------------------|  ← document.body.scrollHeight -> entrire height event the
// |                             |  ← The total height of the entire webpage content, including the part you can’t see yet without scrolling.
// |   page content              |
// |                             |
// |        viewport           |  ← window.innerHeight
// |-----------------------------|
//           ↑
//      window.scrollY


const InfiniteScrollObserver = () => {
    const [products, setProducts] = useState([]);
    const [maxProduct, setMaxProduct] = useState(20);
    const [totalProducts, setTotalProducts] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const loadingRef = useRef();

    const fetchProducts = async () => {
        if(isLoading) return;
        setIsLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${maxProduct}`);
            const data = await response.json();
            setProducts(data.products);
            setTotalProducts(data.total);
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        if (!loadingRef.current) return;

        const loadingObserver = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setMaxProduct(prev => prev + 20)
                }
             },
            { threshold: 1 }
        );

        loadingObserver.observe(loadingRef.current);

        return () => {
            if (loadingRef.current) {
                loadingObserver.unobserve(loadingRef.current);
            }
        }
    }, [])

    useEffect(() => {
        fetchProducts();
    }, [maxProduct])
    console.log(maxProduct, 'maxproducts',totalProducts)
    return (
        <div className="app-viewport">
            <div className="home-container">
                <header className="hero-section">
                    <h1 className="home-title">Developer Challenges</h1>
                    <p className="home-subtitle">
                        Scroll down to discover more products.
                    </p>
                </header>

                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search products..."
                    />
                </div>
                <div className="challenge-grid">
                    {products?.map(item => (
                        <div key={item.id} className="challenge-card">
                            <div className="card-icon">
                                <img
                                    src={item?.images[0]}
                                    alt={item?.title}
                                    className="card-thumb"
                                />
                            </div>

                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <p className="card-desc">{item?.description}</p>
                                <span className="solve-btn">
                                    View Details →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div ref={loadingRef} style={{ height: '40px', margin: '20px 0' }}>
                    {isLoading && (
                        <div className="spinner">Fetching more items...</div>
                    )}
                    {!isLoading && products.length >= totalProducts && totalProducts > 0 && (
                        <p className="end-message">🎉 You’ve reached the end!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfiniteScrollObserver