import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Project from "./components/Project";
import SlaveDetails from "./components/SlaveDetails";
import Movies from "./components/Movies";
import Land from "./components/Land";

const App = () => {
  return (
    <>
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
    </>
  );
};
export default App;
