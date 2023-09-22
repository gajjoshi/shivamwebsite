  import React, { useState, useEffect } from "react";
  import Navbar from "./components/Navbar";
  import Landing from "./components/Landing";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Movies from "./components/Movies";
  // import { Switch} from "react-router-dom";
  import { createTheme, ThemeProvider } from '@mui/material/styles';

  const App = () => {

    const theme = createTheme({
      breakpoints: {
        values: {
          xs: 0,
          s: 600,
          sm:800,
          md: 1030,  // Change this value to your desired breakpoint
          lg: 1280,
          xl: 1920,
        },
      },
    });
    useEffect(() => {
      // Check if the current path is "/home" and then redirect to "/"
      if (window.location.pathname === "/home") {
        window.location.pathname = "/";
      }
    }, []);
  
    

    return (
      <>
        <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/home" element={<Navbar/>}></Route>

          <Route path="/" element={<Landing />}></Route>
          

          <Route
            path="/movie"
            element={
              <>
                <Movies></Movies>
              </>
            }
          ></Route>
        </Routes>
        </ThemeProvider>
      </>
    );
  };
  export default App;

