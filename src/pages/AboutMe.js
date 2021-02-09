import React from "react";
import styled from "styled-components";
import aboutMePic from "../img/aboutMePic.jpg";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";

const AboutMe = () => {
  return (
    <StyledAbout
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <motion.h2 variants={fade}>About Me</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <div className="text-image-container">
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={aboutMePic}
          alt="about me photo"
        />
        <div className="p-container">
          <motion.p variants={fade}>
            <p>
              I'm a front-end developer skilled in Html, Css, Sass, Bootstrap, Styled Components,
              Git/Github, Javascript, Jquery, and React. </p>
              <p> I am passionate about taking what I have in
              my mind and making it look even better on the screen. Once
              completed, I use my knowledge of javascript to give my creations
              functioning legs. At times I use my keyboard as a bouncing
              headboard and my refresh button as a stressball. Eventually, the
              puzzle in front of me gets solved and my creations come to light.
              This is what I love to do.{" "}
            </p>
      
          </motion.p>
        </div>
      </div>
      <ScrollTop />
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    text-align: center;
  }
  h2 {
    padding: 1rem 0rem;
  }
  h3 {
    color: rgba(0, 0, 0, 0.822);
  }
  p {
    color: black;
    line-height: 1.6;
    font-size: 1.1rem;
  }
  .p-container {
    width: 45%;
    @media (max-width: 1300px) {
      width: 100%;
    }
  }
  img {
    width: 50%;
    object-fit: cover;
    @media (max-width: 1300px) {
      width: 100%;
      height: 35vh;
      object-fit: cover;
    }
  }
  .text-image-container {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1300px) {
      display: block;
      padding: 2rem 2rem;
      text-align: center;
    }
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default AboutMe;
