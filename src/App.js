import './App.css';

import CounterRedux from './components/CounterRedux';
function App() {
  return (
    <div className="App">
      <CounterRedux/>
    </div>
  );
}

export default App;


//Navlink
//Navigating Programmatically
//no match route
//nested routes: Switch to the portion of a page. Don't include / for nested routes
//Outlet determines where to render the child component

//relative links append to the current url. We donot add / to the relative link
//absolute links do not append. We add / to the absolute link


//Index Route. When u want to have the parent route but also render child route component