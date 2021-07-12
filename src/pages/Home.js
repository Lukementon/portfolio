import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Goals from "../components/Goals";
import ScrollTop from "../components/ScrollTop";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <AboutMe />
      <Skills />
      <Goals />
      <Reviews />
      <ScrollTop />
    </>
  );
};

export default Home;
