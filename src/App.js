import './App.css';
import React, { createContext } from 'react';

const userContext = createContext();

function App() {
  return (
    <div className="App">
      <h1>Use Reducer Hook</h1>

      <h4>Alternative to use state. It is a state manaement tool</h4>
      <h4>Use State is built using Use Reducer</h4>

    </div>
  );
}

export default App;



