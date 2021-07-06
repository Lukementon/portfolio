import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>Created by Luke Menton</li>
        <div className="icons">
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
        </div>
      </ul>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding: 1rem 20rem;
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
    @media (max-width: 455px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  li {
    a {
      color: white;
    }
    @media (max-width: 1335px) {
      font-size: 90%;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 455px) {
      margin-top: 1rem;
    }
  }
  i {
    cursor: pointer;
    margin-left: 20px;
  }
`;

export default Footer;
