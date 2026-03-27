import React, { useState } from 'react'
import ListItem from './ListItem'
import './virtualization.css'
import { virtualizedListData } from '../../shared/utils/constant'

const BUFFER = 2

// 800 200
const VirtualizedList = ({ height, itemHeight }) => {
  const visibleCount = Math.ceil(height / itemHeight) // calculate intial count to render item intially

  const [range, setRange] = useState({
    start: 0,
    end: visibleCount,
  })

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop

    const startIndex = Math.floor(scrollTop / itemHeight)
    const endIndex = startIndex + visibleCount + BUFFER

    setRange({
      start: startIndex,
      end: endIndex,
    })
  }

  const visibleItems = virtualizedListData.slice(
    range.start,
    range.end
  )

  return (
    <div
      className="list-viewport"
      style={{
        height,
        overflowY: 'auto',
        position: 'relative',
      }}
      onScroll={handleScroll}
    >
      <div
        className="list-canvas"
        style={{
          height: virtualizedListData.length * itemHeight,
          position: 'relative',
        }}
      >
        {visibleItems.map((item, index) => {
          const actualIndex = range.start + index

          return (
            <div
              key={item.id ?? actualIndex}
              style={{
                position: 'absolute',
                top: actualIndex * itemHeight,
                height: itemHeight,
                width: '100%',
              }}
            >
              <ListItem product={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VirtualizedList
