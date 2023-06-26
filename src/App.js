import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Project from './components/Project';
import SlaveDetails from './components/SlaveDetails';
import Movies from './components/Movies';
import Land from './components/Land';


const App = () => {
  const [showComponentA, setShowComponentA] = useState(true);
  const [showComponentB, setShowComponentB] = useState(false);

  useEffect(() => {
    // Set a timeout to switch from Component A to Component B after 5 seconds
    const timeout = setTimeout(() => {
      setShowComponentA(false);
      setShowComponentB(true);
    }, 5000);

    // Clean up the timeout when the component unmounts or the state changes
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
        <Routes>
          <Route path="/" element={<Land/>}></Route>
        </Routes>     
         <Routes>
           <Route path="/movie" element={<><Movies></Movies></>}></Route>
         </Routes>
      
       </>
  );
}
export default App;