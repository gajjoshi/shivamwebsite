import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideUpFromBottom = keyframes`
  0% {
    transform: translateY(70%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  background: rgba(255, 82, 82, 0.15);
  max-width: 920px;
  height: 350px;
  margin: auto;
  transform: translateY(15%);
  box-shadow: 0px 0px 6px 0px #22222273;
  position: relative;

  & .circles {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      left: -6%;
      top: -8%;
      width: 200px;
      height: 200px;
      background: red;
      border-radius: 50%;
    }

    &:after {
      content: "";
      position: absolute;
      right: -11%;
      bottom: -15%;
      width: 200px;
      height: 200px;
      background: red;
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: 766px) {
    height: auto;
    .details-container {
      flex-direction: column;
      .avatar {
        img {
          width: 300px;
        }
      }
      .about {
        margin-top: 10px;
      }
    }
  }
`;

const DetailsContainer = styled.div`
  position: relative;
  display: flex;
`;

const Avatar = styled.div`
  margin: 10px auto;
  position: relative;
  float: left;
  padding: 20px;
  animation: 1s ease-out 0s 1 ${slideInFromLeft};

  img {
    max-width: 240px;
    margin-top: -70px;
    border: 10px solid #fff;
    box-shadow: 0px 0px 6px 0px #22222273;
  }
`;

const About = styled.div`
  float: right;
  padding: 20px;
  margin-top: 50px;
  animation: 1s ease-out 0s 1 ${slideUpFromBottom};

  .name {
    p {
      margin: 0;
      color: white;
      font-size: 1.1em;
      font-weight: bold;
    }
    h1 {
      background: -webkit-linear-gradient(
        rgba(195, 34, 34, 0.9332107843137255),
        rgba(170, 156, 150, 0.7455357142857143)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      margin: 0;
      font-size: 3em;
    }
  }

  .about-content {
    p {
      line-height: 1.6em;
      color: white;
    }
    button {
      border: none;
      color: white;
      padding: 10px;
      background: red;
      cursor: pointer;
      font-weight: bold;
      width: 250px;
      height: 40px;
      font-family: "Nunito", sans-serif;
      box-shadow: 1px 1px 10px 0px #2222222b;
      transition: 0.2s all;
      &:hover {
        box-shadow: 1px 1px 1px 0px #2222222b;
      }
      &:focus,
      &:active {
        outline: 0;
        box-shadow: 1px 1px 10px 0px #22222280;
      }
    }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  z-index: 1;
  animation: 1s ease-in 0s 1 ${fadeIn};

  button {
    flex: 1;
    padding: 10px;
    margin: 5px;
    border: none;
    color: #fff;
    padding: 10px;
    background: #fddb33;
    cursor: pointer;
    font-weight: bold;
    width: 250px;
    height: 40px;
    font-family: "Nunito", sans-serif;
    box-shadow: 1px 1px 10px 0px #2222222b;
    transition: 0.2s all;
    &:hover {
      box-shadow: 1px 1px 1px 0px #2222222b;
    }
    &:focus,
    &:active {
      outline: 0;
      box-shadow: 1px 1px 10px 0px #22222280;
    }
  }
`;

const Producerbio = () => {
  return (
    <div style={{ paddingBottom: "9rem", paddingTop: "5rem" }}>
      <Container>
        <div className="circles"></div>
        <DetailsContainer>
          <Avatar>
            <img src="https://i.suar.me/l3zYA/l" className="img-fluid" alt="" />
          </Avatar>
          <About>
            <div className="name">
              <p>Hello There!</p>
              <h1>I'm Pinngkash Enter</h1>
            </div>
            <div className="about-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                architecto ut accusamus maxime laborum vel et consectetur,
                eveniet nobis, iure aperiam. Fuga illo impedit hic possimus
                tempora asperiores. Dicta, esse!
              </p>
              <button>Read More</button>
            </div>
          </About>
        </DetailsContainer>
        {/* <SkillsContainer>
        <button>Reader</button>
        <button>Coder</button>
        <button>Designer</button>
      </SkillsContainer> */}
      </Container>
    </div>
  );
};

export default Producerbio;
