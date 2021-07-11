import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectDescription = () => {
  return (
    <>
      <StyledProjectDescription>
        <motion.div
          className="description-title"
          // variants={scrollRevealThree}
          // ref={element}
          // initial="hidden"
          // animate={controls}
        >
          <h3>The process</h3>
          <p>
            For these projects I was responsible for implementing all of the
            HTML, CSS, and JavaScript.
          </p>
          <br />
          <p>
            As these were personal projects I created my own designs. However if
            they were being created for clients I would of course be following
            their ideas while providing communication with them every step of
            the way as I believe this is key for a successful project.
          </p>
          <h4>Attention to Detail</h4>
          <p>
            I believe that attention to detail is the most important thing when
            working on a project, whether it's a small personal project, or for
            a client. When every detail is taken into account, it guarantees
            success and ensures that the project will stand out from the rest.
          </p>
          <Link to="/contact">
            <button>Get in Touch!</button>
          </Link>
        </motion.div>
        <motion.div
          className="list"
          // variants={scrollRevealThree}
          // ref={element}
          // initial="hidden"
          // animate={controls}
        >
          <h4>The development process included the following steps:</h4>

          <ul>
            <li>
              Creating a design mockup to start the process and adding styles to
              the UI components.
            </li>
            <li>
              Adding the HTML, CSS and JavaScript to create the application.
            </li>
            <li>
              Adding media queries to allow the application to be responsive.
            </li>
            <li>Debugging any issues with the browser DevTools.</li>
            <li>
              Using React, and other popular plugins to add more structure to
              the application.
            </li>
            <li>
              Implementing Redux or the Context API for state management where
              appropriate
            </li>
          </ul>
        </motion.div>
      </StyledProjectDescription>
    </>
  );
};

const StyledProjectDescription = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 3rem 20rem 3rem 20rem;
  background: rgb(35, 35, 35);
  @media (max-width: 1675px) {
    padding: 1rem 10rem;
  }
  @media (max-width: 1610px) {
    padding: 1rem 5rem;
  }

  @media (max-width: 1335px) {
    padding: 2rem 5rem;
    font-size: 90%;
  }
  @media (max-width: 985px) {
    padding: 1rem 1rem;
    text-align: center;
    padding: 5rem 5rem;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 770px) {
    padding: 5rem 1rem;
  }

  color: white;
  .description-title {
    overflow: hidden;
    width: 50%;
    padding: 0rem 5rem 0rem 0rem;
    line-height: 1.5rem;
    @media (max-width: 960px) {
      width: 100%;
      padding: 0rem;
    }

    h4 {
      font-size: 1.5rem;
      padding: 2rem 0rem 0.5rem 0rem;
    }
    h3 {
      font-size: 2rem;
      padding-bottom: 1.5rem;
    }
    button {
      margin-top: 2rem;
      padding: 0.5rem 3rem;
      font-size: 1rem;
      width: 50%;
      font-weight: 600;
      background: #8900ff;
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      @media (max-width: 985px) {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
      }
      @media (max-width: 960px) {
        margin-bottom: 2rem;
      }
      :hover {
        transform: scale(0.98);
      }
    }
  }
  .list {
    overflow: hidden;
    width: 50%;
    line-height: 1.5rem;
    h4 {
      font-size: 1.2rem;
      padding-bottom: 1rem;
    }
    ul {
      list-style: none;
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 4rem;
      width: 100%;
      margin-bottom: 1rem;
      border-bottom: 1px solid #8900ff;
    }
    @media (max-width: 960px) {
      width: 90%;
    }
    @media (max-width: 375px) {
      li {
        border-bottom: 0;
      }
    }
  }
`;

export default ProjectDescription;
