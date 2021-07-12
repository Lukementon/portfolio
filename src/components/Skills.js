import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import javascript from "../img/logo-javascript.svg";
import redux from "../img/redux.svg";
import sass from "../img/sass-1.svg";
import html from "../img/html5.svg";
import css from "../img/css-5.svg";
import react from "../img/react-2.svg";
import tailwind from "../img/tailwindcss-icon.svg";

const Skills = () => {
  return (
    <Container>
      <h1>
        My <span>Skills</span>{" "}
      </h1>
      <StyledSkills
      // variants={scrollReveal}
      // ref={element}
      // initial="hidden"
      // animate={controls}
      >
        <Skill>
          <img src={html} alt="sass logo" />
        </Skill>
        <Skill>
          <img src={css} alt="css logo" />
        </Skill>
        <Skill>
          <img src={tailwind} alt="tailwind logo" />
        </Skill>
        <Skill>
          <img src={sass} alt="sass logo" />
        </Skill>
        <Skill>
          <img src={javascript} alt="javascript logo" />
        </Skill>

        <Skill>
          <img src={react} alt="react logo" />
        </Skill>
        <Skill>
          <img src={redux} alt="redux logo" />
        </Skill>
      </StyledSkills>
    </Container>
  );
};

const Container = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 20rem 5rem 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: rgb(30, 30, 30);
  color: white;
  @media (max-width: 1640px) {
    padding: 5rem 10rem;
  }
  @media (max-width: 1335px) {
    font-size: 90%;
  }
  @media (max-width: 1315px) {
    padding: 5rem 5rem;
  }
  @media (max-width: 985px) {
    padding: 5rem 2rem;
  }
  @media (max-width: 448px) {
    align-items: center;
  }
  h1 {
    font-size: 3rem;
    padding-bottom: 4rem;
    @media (max-width: 985px) {
      padding-bottom: 1rem;
    }
  }
  span {
    background: -webkit-linear-gradient(180deg, #9100c6, #8900ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyledSkills = styled(motion.div)`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Skill = styled(motion.div)`
  box-shadow: 0px 15px 25px rgba(5, 5, 5, 1);
  margin: 0 1rem 1rem 0;
  @media (max-width: 640px) {
    margin-top: 2rem;
  }
  img {
    height: 5rem;
    width: 5rem;
    object-fit: contain;
  }
`;

export default Skills;
