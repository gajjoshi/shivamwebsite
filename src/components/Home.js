import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import ramtiaave from "./ramtiaave.png"; // Import the local image

const Home = () => {
  // Use an array with a single image for simplicity
  const images = [ramtiaave];

  return (
    <div>
      <Carousel style={{ marginTop: "1px" }}>
        {images.map((item, index) => (
          <Carousel.Item key={index} interval={40000}>
            <a href="https://www.youtube.com/watch?v=VOaUw3CjOJI" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  backgroundImage: `url(${item})`, // Use item directly
                  height: "600px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="banner"
              >
                <Carousel.Caption>
                  {/* Add any caption content if needed */}
                </Carousel.Caption>
              </div>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
