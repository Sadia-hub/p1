import './App.css';
import A from './components/A';
import { JobProvider } from './components/JobContext';
import {UserProvider} from './components/UserContext'

function App() {
  return (
    <div className="App">
      <UserProvider value="Sadia">
        <JobProvider value="Computer Scientist">
          <A/>
        </JobProvider>
      </UserProvider>     
    </div>
  );
}

export default App;
