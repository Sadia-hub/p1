import './App.css';
import React, { useRef, useEffect } from 'react';
import InputComponent from './components/InputComponent';
function App() {

  const inputRef = useRef()
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <div className="App">
      <h1>Use Ref</h1>

      <h4>Access DOM nodes directly into functional components</h4>
      <h2>E1: Asap page loads we need input field be focused</h2>
      
      <input type="text" ref={inputRef} />
      
    </div>
  );
}

export default App;



