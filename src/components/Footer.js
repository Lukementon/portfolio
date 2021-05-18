import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>Designed and built by Luke Menton</li>
        <li>
          <a href="https://www.linkedin.com/in/luke-menton-009748211/">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Lukementon">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  height: 10vh;
  padding: 0rem 20rem;
  background: rgb(50, 50, 50);
  color: white;
  display: flex;
  border-top: 1px solid rgb(80, 80, 80);
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
  }
  li {
    a {
      color: white;
    }
    @media (max-width: 1335px) {
      font-size: 90%;
    }
  }
  i {
    cursor: pointer;
  }
`;

export default Footer;
