import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import React from './components/React';
import Android from './components/Android';

function App() {
  return (
    <div className="App">
      <Navbar/>
       {/* ensure that only one component is rendered at a time */}
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="projects" element={<Projects/>}>
          <Route path="react" element={<React/>}/>
          <Route path="android" element={<Android/>}/>
        </Route>
        <Route path="contact" element={<Contact/>}/>
        <Route path="resume" element={<Resume/>}/>
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
     
    </div>
  );
}

export default App;


// when no route matches