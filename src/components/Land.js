import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Landing from './Landing';

export default function Land() {

    const [showComponentA, setShowComponentA] = useState(true);
  const [showComponentB, setShowComponentB] = useState(false);

  useEffect(() => {
    // Set a timeout to switch from Component A to Component B after 5 seconds
    const timeout = setTimeout(() => {
      setShowComponentA(false);
      setShowComponentB(true);
    }, 1000);

    // Clean up the timeout when the component unmounts or the state changes
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
  <div>
    {showComponentA && <Landing />}
    {showComponentB && <Navbar />}
    
    </div>
  )
}
