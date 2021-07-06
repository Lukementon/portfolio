import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import node from "../img/nodejs-icon.svg";
import mongodb from "../img/mongodb-icon-1.svg";
import python from "../img/python-5.svg";
import vue from "../img/vue-9.svg";
import php from "../img/php-1.svg";

const Goals = () => {
  return (
    <Container>
      <Title>
        <h1>
          My
          <span> Goals</span>
        </h1>
        <p>
          Being a frontend developer, the next step for me is to learn server
          side programming so I can build larger, full-stack applications and
          websites.
          <br />I have such a passion for development and it's so enjoyable when
          learning new things. I really enjoy building interfaces and I believe
          that they make or break the user expericnce. At the same time I find
          server side programming fascinating and that is definitely what I plan
          on learning next.
        </p>
        <br />
        <h3>Some of the technolgies I plan on learning soon:</h3>
      </Title>
      <StyledGoals
      // variants={scrollRevealTwo}
      // ref={element}
      // initial="hidden"
      // animate={controls}
      >
        <StyledGoal>
          <img src={node} alt="node js logo" />
        </StyledGoal>
        <StyledGoal>
          <img src={mongodb} alt="mongodb logo" />
        </StyledGoal>
        <StyledGoal>
          <img src={vue} alt="vuejs logo" />
        </StyledGoal>
        <StyledGoal>
          <img src={python} alt="python logo" />
        </StyledGoal>
        <StyledGoal>
          <img src={php} alt="php logo" />
        </StyledGoal>
      </StyledGoals>
    </Container>
  );
};

const Container = styled(motion.div)`
  padding: 5rem 20rem 5rem 20rem;
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
  background: rgb(25, 25, 25);
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
    padding: 5rem 1rem;
  }
  @media (max-width: 448px) {
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    padding: 1rem 0rem 3rem 0rem;
  }
  p {
    padding-bottom: 1rem;
    @media (max-width: 985px) {
      padding-bottom: 0rem;
    }
  }
  span {
    background: -webkit-linear-gradient(180deg, #9100c6, #8900ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Title = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 448px) {
    align-items: center;
  }
  h3 {
    font-weight: lighter;
  }
`;

const StyledGoals = styled(motion.div)`
  padding-top: 3rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 985px) {
    margin-bottom: 1rem;
  }
`;

const StyledGoal = styled(motion.div)`
  padding-top: 1rem;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 1);
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

export default Goals;
