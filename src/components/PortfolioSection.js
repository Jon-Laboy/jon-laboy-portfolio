import React from "react";
import gameProject from "../img/gameProject.PNG";
import movieProject from "../img/movieProject.PNG";
import musicProject from "../img/musicProject.PNG";
import { useScroll } from "./UseScroll";
import { About, Description } from "../styles";
import styled from "styled-components";
import { fade, lineAnim, photoAnim } from "../animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      id="portfolio"
      variants={fade}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <Description>
        <h2>My Projects</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Cards>
          {/* <div className="project-1">
            <motion.h2 variants={fade}>Chill-Hop Music App</motion.h2>
            <a
              href="https://jon-laboy.github.io/chillHop-music-app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                variants={{ photoAnim }}
                initial="hidden"
                animate="show"
                style={{ width: "100%" }}
                src={musicProject}
                alt="music app pic"
              />
            </a>
            <p>
              This React App contains a list of songs the user can skip through,
              shuffle through, or repeat as selected.
            </p>
            <div className="project-link-btns">
              <a
                href="https://jon-laboy.github.io/chillHop-music-app/"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button variants={fade}>View Site</motion.button>
              </a>
              <a
                href="https://github.com/Jon-Laboy/chillHop-music-app"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button variants={fade}>View Code</motion.button>
              </a>
            </div>
          </div> */}
          <div className="project-2">
            <motion.h2 variants={fade}>Game Pad</motion.h2>
            <a
              href="https://jon-laboy.github.io/vido-game-app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                variants={{ photoAnim }}
                initial="hidden"
                animate="show"
                style={{ width: "99%" }}
                src={gameProject}
                alt="map app pic"
                className="lower-image"
              />{" "}
            </a>
            <p class="lower-p-tags">
              This project utilizes the Rawg.io API. It was built with React,
              Material UI, SASS, React Icons, and React Hooks. The user can view
              upcoming, popular, and new video games and also search for games
              by title.
            </p>
            <div className="project-link-btns">
              <a
                href="https://jon-laboy.github.io/vido-game-app/"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button variants={fade}>View Site</motion.button>
              </a>
              <a
                href="https://github.com/Jon-Laboy/vido-game-app"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button variants={fade}>View Code</motion.button>
              </a>
            </div>
          </div>
          <div className="project-3">
            <motion.h2 variants={fade}>Movie App</motion.h2>
            <a
              href="https://jon-laboy.github.io/What2Watch/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                variants={{ photoAnim }}
                initial="hidden"
                animate="show"
                style={{ width: "99%" }}
                src={movieProject}
                alt="movie app pic"
                className="lower-image"
              />
            </a>
            <p class="lower-p-tags">
              This React App utilizes The Movie Database API. The user can
              search popular movies by title or discover movies by genre. Each
              movie will have the title, poster and release date. The user can
              also click on a description button to read the movie's
              description.
            </p>
            <div className="project-link-btns">
              <a
                href="https://jon-laboy.github.io/What2Watch/"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button variants={fade}>View Site</motion.button>
              </a>
              <a
                href="https://github.com/Jon-Laboy/What2Watch"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button variants={fade}>View Code</motion.button>
              </a>
            </div>
          </div>
        </Cards>
        <div className="contact-btn">
          <Link to="/contact">
            {" "}
            <motion.button variants={fade}>Contact Me</motion.button>
          </Link>
        </div>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    margin-top: 1.8rem;
    padding-bottom: 1.2rem;
  }
  p {
    width: 70%;
    line-height: 2rem;
    padding: 2rem 0rem 4rem 0rem;
    text-align: center;
    text-decoration: bold;
  }
  .lower-p-tags {
    height: 14rem;
  }
  .contact-btn {
    display: flex;
    justify-content: center;
    button {
      padding: 1.5rem 4rem 1.5rem 4rem;
      margin-top: 5rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    font-size: 3rem;
    text-align: center;
    margin-top: 4rem;
  }
  p {
    width: 99%;
  }
  img {
    border: 1px solid white;
    cursor: pointer;
  }
  .project-link-btns {
    display: flex;
    justify-content: center;
    button {
      margin: 0rem 0.5rem 6rem 0.5rem
    }
  }

  @media (min-width: 1300px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      flex: 1 0 50%;
    }
    div:first-child {
      flex: 0 1 100%;
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .project-link-btns {
      margin-top: 2rem;
    }
  @media (max-width: 365px) {
    .project-link-btns {
      margin-top: 3rem;
    }
  }
`;

export default PortfolioSection;
