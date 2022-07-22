import React,{useContext} from 'react'
import {userContext} from '../App'

function A() {
    

    const context = useContext(userContext)
    
    const increment = () =>{
        context.counterDispatch({type:'INCREMENT', payload:1})
    }

    const decrement = () =>{
        context.counterDispatch({type:'DECREMENT', payload:1})
    }

    
  return (
    <div>
        <h1>Count {context.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default A
