import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animations";
import me from "../img/closeup.jpg";

const AboutMe = () => {
  return (
    <Container>
      <motion.div className="description">
        <Hide>
          <motion.h1 variants={titleAnim} initial="hidden" animate="show">
            <span>Luke Menton</span>
            <br />
            Web Developer.
          </motion.h1>
        </Hide>
        <Hide>
          <motion.h3 variants={titleAnim} initial="hidden" animate="show">
            Frontend Web Developer and Designer
          </motion.h3>
        </Hide>
        <Hide>
          <motion.p variants={titleAnim} initial="hidden" animate="show">
            Hey I'm Luke and I'm a developer based in Dublin Ireland. I believe
            that with a positive mindset, hard work and commitment we can
            achieve and overcome anything. I'm always up for learning new things
            and furthering myself as a developer.
          </motion.p>
        </Hide>
        <a href="https://www.upwork.com/freelancers/~017e6addd648f3b6fd">
          <motion.button variants={fade} initial="hidden" animate="show">
            Hire Me on Upwork
          </motion.button>
        </a>
      </motion.div>
      <div className="img">
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={me}
          alt="Luke Menton"
        />
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  padding: 10rem 20rem 10rem 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(25, 25, 25);
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 560px) {
    padding: 3rem 1rem;
  }

  .description {
    padding-top: 1rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 985px) {
      width: 80%;
      display: block;
      padding-top: 0rem;
      width: 100%;
    }

    h1 {
      top: 0;
      font-size: 3rem;
      margin-bottom: 3rem;
      @media (max-width: 985px) {
        margin-bottom: 0.5rem;
      }
    }
    span {
      background: -webkit-linear-gradient(180deg, #9100c6, #8900ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3 {
      padding-bottom: 1rem;
      @media (max-width: 985px) {
        padding-bottom: 0.5rem;
      }
    }
    p {
      line-height: 1.5rem;
    }
    button {
      margin-top: 2rem;
      font-size: 1.2rem;
      padding: 0.5rem 1.5rem;
      border: none;
      color: white;
      background: #8900ff;
      cursor: pointer;
      transition: all 0.5s ease;
      font-weight: 600;
      :hover {
        transform: scale(0.98);
      }
      @media (max-width: 1335px) {
        font-size: 90%;
      }
      @media (max-width: 985px) {
        margin: 1rem;
      }
    }
  }
  .img {
    padding-top: 1rem;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 985px) {
      width: 60%;
    }
    @media (max-width: 800px) {
      width: 70%;
    }
    @media (max-width: 555px) {
      width: 80%;
    }

    img {
      width: 25rem;
      height: 25rem;
      object-fit: cover;
    }
  }
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;

export default AboutMe;
