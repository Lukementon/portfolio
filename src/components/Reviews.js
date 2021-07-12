import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div>
      <Container>
        <Title>
          <h1>
            <span>Reviews</span>
          </h1>
          <h3>Jason K</h3>
          <div className="stars">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
          </div>
          <p>
            I highly recommend Luke for the services he provided me in setting
            up my website. Being busy growing my business, a website was
            something I was going to do myself for a long time, but, I didn't
            have the time to learn how.
          </p>
          <p>
            I should have gotten help from Luke immediately, I'd have gotten my
            site done a lot sooner and it now looks better than I could have
            done myself. It was well worth the investment to let an expert like
            Luke take care of.
          </p>
          <p>
            I'm happy now I know that my site looks professional and it will
            give my current and future clients a place to easily find out about
            my business.
          </p>
        </Title>
      </Container>
    </div>
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

  .heading {
    }
    span {
      background: -webkit-linear-gradient(180deg, #9100c6, #8900ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1 {
      font-size: 3rem;
      padding: 1rem 0rem 3rem 0rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 1rem;
  }
  p {
    padding-bottom: 1rem;
    width: 70%;
    max-width: 1000px;
    padding-bottom: 1rem;
    @media (max-width: 890px) {
      width: 100%;
    }
    @media (max-width: 985px) {
      padding-bottom: 0rem;
    }
  
`;

const Title = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  .stars {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }

  .star {
    color: rgb(255, 236, 126);
    font-size: 1.5rem;
  }
  @media (max-width: 448px) {
    align-items: center;
  }
  h3 {
    font-weight: lighter;
  }
`;

export default Reviews;
