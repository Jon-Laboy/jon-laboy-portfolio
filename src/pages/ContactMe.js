import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactMe = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
          <Circle />
            <h2>jonlaboy91@gmail.com</h2>
          </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnim}>
        <Circle />
           <a href="https://www.linkedin.com/in/jon-laboy-815172195/" target="__blank"><h2>Linkedin</h2></a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
    a {
      color: #23d997;
    }
    a h2 {

     &:hover {
       color: #23d997; 
     }
    }
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color:#353535; 
    @media (max-width: 640px) {
      font-size: 1.8rem;
    }
    @media (max-width: 365px) {
      font-size: 1.5rem;
    }
    @media (max-width: 314px) {
      font-size: 1.2rem;
    }
  }
`;

export default ContactMe;
