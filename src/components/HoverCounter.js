import React from 'react'
import HOC from './HOC'
function HoverCounter({count, increment}) {
  return (
    <button onMouseOver={increment}>You hovered {count} times</button>
  )
}

export default HOC(HoverCounter)