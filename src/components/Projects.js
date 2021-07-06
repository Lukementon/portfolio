import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import allignment from "../img/allignment.png";
import Netflix from "../img/Netflix.png";
import myignite from "../img/my-ignite.png";
import realfitness from "../img/realfitness.png";

import { slider, sliderContainer, pageAnim, fadeTwo } from "../animations";

const Projects = () => {
  return (
    <Container
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
      style={{ background: "rgb(25,25,25)" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <motion.h1 variants={fadeTwo}>
        <span>Projects</span>
      </motion.h1>

      <StyledProjects variants={fadeTwo}>
        <ProjectWrapper>
          <Project>
            <a href="https://real-fitness-c7b34.web.app/">
              <img src={realfitness} alt="realfitness screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>Real Fitness</h3>
              <p>
                Personal training website for a client. Built with React and
                uses firebase for hosting and for the contact form database.
                This website is fully responsive and incredibly clean.
              </p>
              <p>
                Technologies used include react, javascript, firebase,
                react-router, vanilla css and styled components.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://luke-netflix-build-ef64a.web.app/">
              <img src={Netflix} alt="netflix clone screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>Netflix Clone</h3>
              <p>
                Full Stack Netflix clone built with React, Redux, Stripe and
                Firebase. This has full login and user authentication using
                Redux and Firebase. It also has full payment functionality with
                Stripe. A user can only access the movie homepage if they have
                subscribed to a plan.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://gamingapp124864.netlify.app">
              <img src={myignite} alt="myignite screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>Redux Gaming App</h3>
              <p>
                A similar version of the previous application but with a few
                changes. I've used Redux for the state management this time and
                have made a few changes to the UI and layout of the website.
              </p>
              <p>
                Three categories of games are rendered as soon as the page
                loads. I've also added a game details component so that when the
                user clicks on a game it pulls out more content from the API
                such as the rating, available platforms, a description and
                screenshots.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://lukementon-gaming-app.netlify.app">
              <img src={allignment} alt="allignment screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>Gaming App with search component</h3>
              <p>
                React gaming project using the Rawg IO API to request games and
                information. This project uses react router and has three pages,
                each making different requests to filter different categories of
                games. I have also included a search component to allow the user
                to request specific games.
              </p>
              <p>
                For CSS and animations I've used styled components with framer
                motion.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
      </StyledProjects>
    </Container>
  );
};

const Container = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5rem 20rem 5rem 20rem;
  background: rgb(30, 30, 30);
  color: white;
  @media (max-width: 1610px) {
    padding: 5rem 5rem;
  }
  @media (max-width: 1015px) {
    padding: 5rem 5rem;
  }
  @media (max-width: 770px) {
    padding: 5rem 1rem;
  }

  h1 {
    font-size: 3rem;
    padding: 0rem 0rem 3rem 0rem;
  }
  span {
    background: -webkit-linear-gradient(180deg, #9100c6, #8900ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyledProjects = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 3rem;
  @media (max-width: 1241px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media (max-width: 431px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const ProjectWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #939393;
  border-radius: 1rem;
  overflow: hidden;
`;

const ProjectDescription = styled(motion.div)`
  text-align: center;
  height: 100%;
  line-height: 1.5rem;
  padding: 0 1rem;
  h3 {
    padding: 2rem 0;
  }
  p {
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #9a07da;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #7400ae;
`;
const Frame3 = styled(Frame1)`
  background: #0066ff;
`;
const Frame4 = styled(Frame1)`
  background: #0062b7;
`;

export default Projects;
