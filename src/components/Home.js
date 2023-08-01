import React, { useEffect, useState } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(
          "https://prodhouse.pythonanywhere.com/image/"
        );
        setImages(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div>
      <Carousel style={{ marginTop: "100px" }}>
        {images.map((item, index) => (
          <Carousel.Item key={index} interval={40000}>
            <div
              style={{
                backgroundImage:`url(${item.img})`,
                height: "500px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <Carousel.Caption>
                {/* Add any caption content if needed */}
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
