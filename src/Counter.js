import React from 'react'
import {useReducer} from 'react'


const initialState = {
    count:0
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return {...state, count:state.count+action.payload}
        case 'DECREMENT':
            return {...state, count:state.count-action.payload}
        default:
            return state
    }
}   

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () =>{
        dispatch({type:'INCREMENT', payload:1})
    }

    const decrement = () =>{
        dispatch({type:'DECREMENT', payload:1})
    }
  return (
    <div>
        <h1>Count- {state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter