import './App.css';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <h1>Higher Order Components</h1>
     <Counter name="Sadia"/>
     <HoverCounter/>
    </div>
  );
}

export default App;


//if you to pass props to Counter, they will be passed to HOC. 
//SO use spread operator in HOC to pass them to Original Component