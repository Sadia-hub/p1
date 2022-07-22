import React from 'react'
import {useContext} from 'react'
import {UserContext} from '../UserContext'
function C () {

    const name = useContext(UserContext)
  return (
    <div>
        <h1>I am C and I use context value. My name is {name}</h1>
    </div>
  )
}

export default C