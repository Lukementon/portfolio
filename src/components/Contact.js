import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Container>
      <StyledContact>
        <h1>
          <span className="title-span">Contact</span> Me
        </h1>
        <h4>Drop me a message here and I'll get back to you!</h4>

        <FormContainer>
          <form action="/" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form">
              <input type="text" name="name" autoComplete="off" required />
              <label className="label-name" htmlFor="name">
                <span className="content-name">Your Name</span>
              </label>
            </div>
            <div className="form">
              <input type="text" name="email" autoComplete="off" required />
              <label className="label-name" htmlFor="email">
                <span className="content-name">Your Email</span>
              </label>
            </div>
            <div className="form">
              <input type="text" name="message" autoComplete="off" required />
              <label className="label-name" htmlFor="message">
                <span className="content-name">Your Message</span>
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormContainer>
        <h4>
          Or if you'd prefer, email me directly at the address listed below!
        </h4>
        <p>lukementon15@gmail.com</p>
      </StyledContact>
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 20rem 3rem 20rem;
  background: rgb(25, 25, 25);
  @media (max-width: 1640px) {
    padding: 3rem 10rem;
  }
  @media (max-width: 1335px) {
    font-size: 90%;
  }
  @media (max-width: 1315px) {
    padding: 3rem 5rem;
  }
  @media (max-width: 985px) {
    padding: 3rem 1rem;
  }
`;

const StyledContact = styled(motion.div)`
  color: white;
  display: flex;
  width: 75%;
  height: 100%;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 100%;
  }

  h1 {
    font-size: 3rem;
    padding-bottom: 1rem;
  }
  h4 {
    font-weight: lighter;
  }
  p {
    margin-top: 1rem;
  }

  .title-span {
    background: -webkit-linear-gradient(180deg, #9100c6, #8900ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FormContainer = styled(motion.div)`
  .form {
    font-size: 1rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: 3rem;
    height: 3rem;
  }
  .form input {
    width: 100%;
    height: 3rem;
    font-size: 1.5rem;
    padding-top: 1rem;
    background: transparent;
    color: white;
    border: none;
    outline: none;
  }
  .form label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid white;
    @media (max-width: 1335px) {
      font-size: 90%;
    }
  }
  .form label::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #8900ff;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 0.3s ease;
  }

  .form input:focus + .label-name .content-name,
  .form input:valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 14px;
    color: #8900ff;
  }
  .form input:focus + .label-name::after,
  .form input:valid + .label-name::after {
    transform: translateX(0%);
  }
  button {
    margin: 4rem 0rem 2rem 0rem;
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    background: #8900ff;
    color: white;
    transition: all 0.5s ease;
    :hover {
      transform: scale(0.98);
    }
    @media (max-width: 1335px) {
      font-size: 90%;
    }
  }
`;

export default Contact;
