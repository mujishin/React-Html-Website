import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Gallery from './Pages/Gallery';
import Speakers from './Pages/Speakers';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/speakers' element={<Speakers/>} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>} />
    </Routes>
   </Router>
    </>
    
  );
}

export default App;
