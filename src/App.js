import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Render Props</h1>
      <h5>A technique for sharing code between React Components using a prop whose value is a function</h5>
    </div>
  );
}

export default App;


//if you to pass props to Counter, they will be passed to HOC. 
//SO use spread operator in HOC to pass them to Original Component