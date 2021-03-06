import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Netflix from "../img/Netflix.png";
import myignite from "../img/my-ignite.png";
import realfitness from "../img/realfitness.png";
import tailwind from "../img/tailwind.png";
import linkedin from "../img/linkedin.png";
import gmail from "../img/gmail.png";
import whatsapp from "../img/whatsapp5.png";
import amazon from "../img/amazon.png";
import airbnb from "../img/air-bnb.png";

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
            <a href="https://luke-air-bnb-clone.vercel.app/">
              <img src={airbnb} alt="Airbnb Screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>Airbnb Clone</h3>
              <p>
                Airbnb clone built with NextJS, React, Mapbox and Tailwind CSS!
              </p>
              <p>
                Amazing fully responsive Airbnb clone that features server side
                rendering and static site generation. I've implemented Mapbox
                for the location of the search results. Tailwind CSS used for
                all of the styling.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://amazon-2-0-mauve.vercel.app/">
              <img src={amazon} alt="Amazon Screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>Amazon Clone</h3>
              <p>
                Amazon clone built with NextJS, React, Redux, Tailwind CSS,
                Stripe and Firebase!
              </p>
              <p>
                Incredibly clean, responsive and fully functional Amazon clone.
                Includes Google login and payment functionality with Stripe.
                I've used Redux to manage the products, users and the checkout
                basket.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://whatsapp-clone-three-mu.vercel.app/">
              <img src={whatsapp} alt="whatsapp Screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>WhatsApp Clone</h3>
              <p>WhatsApp clone built with NextJS, React, and Firebase!</p>
              <p>
                Includes full Google login authentication. Styling done with
                Styled Components and for icons I used Material UI.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://clone-e4611.web.app/">
              <img src={gmail} alt="gmail screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>Gmail Clone</h3>
              <p>Brand new Gmail clone built with React, Redux and Firebase!</p>
              <p>
                Full google authentication for loging in and out! Redux is used
                for authentication and for the email state. Firebase is used for
                hosting and for the Database.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://linkedin-clone-f938d.web.app/">
              <img src={linkedin} alt="https://linkedin-clone-f938d.web.app/" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>LinkedIn Clone</h3>
              <p>LinkedIn clone built with React, Redux and Firebase!</p>
              <p>
                Includes full user login and authentication done with Firebase
                and Redux. Styling done with vanilla CSS and for icons I used
                Material UI.
              </p>
              <p>Incredibly clean and fun build.</p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
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
                uses Firebase for hosting and for the contact form database.
                This website is fully responsive and incredibly clean.
              </p>
              <p>
                Technologies used include React, JavaScript, Firebase,
                React-Router, Vanilla CSS and Styled Components.
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
              <p>Gaming app built with React, Redux and Styled Components.</p>
              <p>
                Three categories of games are rendered as soon as the page
                loads. I've also added a game details component so that when the
                user clicks on a game, it pulls out more content from the API
                such as the rating, available platforms, a description and
                screenshots.
              </p>
            </div>
          </ProjectDescription>
        </ProjectWrapper>
        <ProjectWrapper>
          <Project>
            <a href="https://boring-hopper-b2c592.netlify.app/">
              <img src={tailwind} alt="myignite screenshot" />
            </a>
          </Project>
          <ProjectDescription>
            <div className="description-container">
              <h3>Website Template</h3>
              <p>Landing page template designed for a gym.</p>
              <p>
                Clean and fully responsive design with 4 main sections.
                Animations done with AOS.
              </p>
              <p>No frameworks on this build just HTML and Tailwind CSS.</p>
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
  background: rgb(50, 50, 50);
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
