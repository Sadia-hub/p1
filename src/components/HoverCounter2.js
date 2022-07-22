import React from 'react'

function HoverCounter2({count, increment}) {
  return (
    <div onMouseOver={increment}>You hovered {count} times</div>
  )
}

export default HoverCounter2