import React from 'react'
import './virtualization.css'

const ListItem = ({ product }) => {
  const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <div className="discount-badge">-{product.discountPercentage}%</div>
        <img src={product.thumbnail} alt={product.title} className="product-img" />
      </div>
      <div className="content-wrapper">
        <div>
          <div className="top-row">
            <div>
              <span className="category-pill">{product.category}</span>
              <h3 className="product-title">{product.title}</h3>
              <span className="brand-name">{product.brand}</span>
            </div>
            <div className="availability-tag">
              ● {product.availabilityStatus}
            </div>
          </div>

          <div className="stats-row" style={{ marginTop: '12px' }}>
            <div className="stat-item">⭐ {product.rating}</div>
            <div className="stat-item">📦 {product.stock} in stock</div>
            <div className="stat-item">🚚 {product.shippingInformation}</div>
          </div>
        </div>
        <div className="bottom-row">
          <div className="price-box">
            <span className="original-price">${originalPrice}</span>
            <span className="current-price">${product.price}</span>
          </div>

          <button className="challenge-card"
            style={{
              padding: '10px 20px',
              margin: 0,
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}>
            View Product
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListItem