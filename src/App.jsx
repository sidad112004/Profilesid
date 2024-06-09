import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skill from './Components/Skill';
import Achivement from './Components/Achivement';
import Contact from './Components/Contact';
function App() {
  return (
    <>
    <div>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skill/>}/>
    <Route path='/achivement' element={<Achivement/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
