import React from "react";
import head from "../images/head.png";
import "./Home.css";
import image from "../images/7string.png";
import Carousel from "react-bootstrap/Carousel";
import { dividerClasses } from "@mui/material";

import * as ReactDOM from "react-dom";

const Home = () => {
  return (
    <div>
      <Carousel style={{marginTop:'100px'}} >
        <Carousel.Item interval={1000}>
        <div style={{backgroundImage: "url($(./images/7string.png))"}} >
        {/* <div style={{backgroundImage: `url(${image})`}}> */}



          <Carousel.Caption>
            <h3 style={{color:'white'}}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
    </div>
  );
};

export default Home;
