import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/projects">
          <li>Projects</li>
        </Link>
        <Link className="link" to="/contact">
          <li>Contact Me</li>
        </Link>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: sticky;
  top: 0;
  left: 0;
  height: 10vh;
  padding: 0rem 20rem 0rem 20rem;
  background: rgb(35, 35, 35);
  margin: auto;
  color: white;
  display: flex;
  border-bottom: 1px solid rgb(80, 80, 80);
  z-index: 10;
  @media (max-width: 1640px) {
    padding: 1rem 10rem;
  }

  @media (max-width: 1315px) {
    padding: 1rem 5rem;
  }
  @media (max-width: 985px) {
    padding: 1rem 1rem;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    .link {
      text-decoration: none;
      color: white;
    }
  }
  li {
    padding-left: 0rem;
    font-size: 1rem;
    @media (max-width: 1335px) {
      font-size: 90%;
    }
  }
`;

export default Nav;
