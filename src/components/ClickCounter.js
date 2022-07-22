import React from 'react'
import HOC from './HOC'
function ClickCounter({count, increment}) {
  return (
    <button onClick={increment}>Clicked {count} times</button>
  )
}

export default HOC(ClickCounter)