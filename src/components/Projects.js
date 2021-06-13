import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import allignment from "../img/allignment.png";
import Netflix from "../img/Netflix.png";
import myignite from "../img/my-ignite.png";

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
            <a href="https://lukementon-gaming-app.netlify.app">
              <img src={allignment} alt="allignment screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <h3>Gaming App with search component</h3>
            <p>
              React gaming project using the Rawg IO API to request games and
              information. This project uses react router and has three pages,
              each making different requests to filter different categories of
              games. I have also included a search component to allow the user
              to request specific games.
              <br />
              For CSS and animations I've used styled components with framer
              motion.
            </p>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://luke-netflix-build-ef64a.web.app/">
              <img src={Netflix} alt="netflix clone screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <h3>Netflix Clone</h3>
            <p>
              Full Stack Netflix clone built with React, Redux, Stripe and
              Firebase. This has full login and user authentication using Redux
              and Firebase. It also has full payment functionality with Stripe.
              A user can only access the movie homepage if they have subscribed
              to a plan.
            </p>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://gamingapp124864.netlify.app">
              <img src={myignite} alt="myignite screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <h3>Redux Gaming App</h3>
            <p>
              A similar version of the previous application but with a few
              changes. I've used Redux for the state management this time and
              have made a few changes to the UI and layout of the website.
              <br />
              Three categories of games are rendered as soon as the page loads.
              I've also added a game details component so that when the user
              clicks on a game it pulls out more content from the API such as
              the rating, available platforms, a description and screenshots.
            </p>
          </ProjectDescription>
        </ProjectWrapper>
      </StyledProjects>
    </Container>
  );
};

const Container = styled(motion.div)`
  overflow: hidden;
  height: 150vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3rem 20rem 0rem 20rem;
  background: rgb(30, 30, 30);
  color: white;
  @media (max-width: 1640px) {
    padding: 1rem 10rem;
  }

  @media (max-width: 1335px) {
    padding: 2rem 5rem;
    font-size: 90%;
  }

  @media (max-width: 1315px) {
    align-items: center;
    padding: 1rem 5rem;
    height: 230vh;
  }
  @media (max-width: 985px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 780px) {
    align-items: center;
    justify-content: flex-start;
  }

  h1 {
    font-size: 3rem;
    padding: 1rem 0rem 1rem 0rem;
  }
  span {
    background: -webkit-linear-gradient(180deg, #9100c6, #8900ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyledProjects = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
`;

const ProjectWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1315px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const ProjectDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  height: 100%;
  line-height: 1.5rem;
  margin-left: 2rem;
  @media (max-width: 1315px) {
    margin: 2rem 0rem 0rem 0rem;
  }
  h3 {
    padding-bottom: 1rem;
  }
`;

const Project = styled.div`
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 1);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  @media (max-width: 780px) {
    padding: 0rem;
  }

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
