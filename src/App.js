import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
       {/* ensure that only one component is rendered at a time */}
      <Routes>
      
        <Route path="/" element={ <Home /> } Active/>
        <Route path="projects" element={<Projects/>}/>
        
        <Route path="contact" element={<Contact/>}/>
        <Route path="resume" element={<Resume/>}/>

        <Route path='*' element={<Page404 />} />
        
      </Routes>
      
     
    </div>
  );
}

export default App;


//Navlink
//Navigating Programmatically
//no match route
