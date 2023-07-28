import React, { useEffect } from "react";
import head from "../images/head.png";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { dividerClasses } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const Home = () => {
  const [image, setImage] = useState("");
  useEffect(() => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://prodhouse.pythonanywhere.com/image/',
      headers: { }
    };
    
    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log((response.data));
        setImage(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    
    makeRequest();
    
    }, []);
  return (
    <div>
      <Carousel style={{marginTop:'100px'}} >
      {image?image.map((item,index)=>{
        console.log(item.img)
        return(
          <Carousel.Item interval={4000}>
        <div style={{backgroundImage:  `url(${item.img})`,height:"500px"}} >
          hii
          <Carousel.Caption>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        )
      }):null}
        
      </Carousel> 
    </div>
  );
};

export default Home;
