import './App.css';
import React, { createContext, useReducer } from 'react';
import A from './components/A';
import B from './components/B';

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
const userContext = createContext();
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  

  return (
    <div className="App">
      <h1>Use Reducer Hook with useContext</h1>

      <h4>Counter Value is shared across two components A and B</h4>
      

      <userContext.Provider value={{count: state.count, counterDispatch:dispatch}}>
        <A />
        <B />
      </userContext.Provider>

    </div>
  );
}

export default App;

export {userContext}

