import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
      <h1>I am Redux</h1>
      <CakeContainer/>
      <HooksCakeContainer/>
      </div>
    </Provider>
  );
}




export default App;
