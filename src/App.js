import './App.css';
import ClickCounter from './components/ClickCounter';
import CounterRenderProp from './components/CounterRenderProp';
import HoverCounter from './components/HoverCounter';




function App() {
  return (
    <div className="App">
      <h1>Render Props</h1>
      <h5>A technique for sharing code between React Components using a prop whose value is a function</h5>

      <CounterRenderProp
      render={(count, increment)=>{
          return <ClickCounter count={count} increment={increment}/>
      }}
      />

    <CounterRenderProp
      render={(count, increment)=>{
          return <HoverCounter count={count} increment={increment}/>
      }}
      />


    

    </div>
  );
}

export default App;


//if you to pass props to Counter, they will be passed to HOC. 
//SO use spread operator in HOC to pass them to Original Component