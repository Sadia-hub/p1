import './App.css';
import React, { createContext } from 'react';
import A from './components/A';

const userContext = createContext();

function App() {
  return (
    <div className="App">
      <h1>Use Context Hook</h1>
      <h5>A technique to pass data through the component tree without having to pass props down manually at each level</h5>

      <h5>It can be through context API as well. But it has higher code complexity. So, use context hook helps in simplifying the code</h5>

      <h5>In use Context, context creation and provision remains the same. It just changes the way of context consumption</h5>


        <userContext.Provider value="Sadia">
          <A />
        </userContext.Provider>

    </div>
  );
}

export default App;
export {userContext};


