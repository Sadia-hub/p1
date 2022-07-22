import './App.css';

import A from './components/A';
import {UserContext} from './UserContext'
function App() {

  
  return (
    <div className="App">

      <UserContext.Provider value="Sadia">
          <h1>Use Context Hook</h1>
          <A />
      </UserContext.Provider>
    </div>
  );
}

export default App;
