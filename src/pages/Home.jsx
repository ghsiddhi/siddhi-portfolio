import React from "react";
import { AboutMe } from "../components/aboutMe/AboutMe";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
