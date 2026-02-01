import React from 'react'
import ListItem from './ListItem';
import './virtualization.css'
import { virtualizedListData } from '../../shared/utils/constant';

const VirtualizedList = () => {

  return (
    <div className="app-viewport">
      <main className="home-container">
        <header className="hero-section">
          <h1 className="home-title">Product Catalog</h1>
          <p className="home-subtitle">Browsing high-performance virtualization.</p>
        </header>
        <div className="list-viewport">
          <div className="list-canvas">
            {virtualizedListData.map((product, index) => (
              <ListItem
                key={index}
                product={product}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default VirtualizedList