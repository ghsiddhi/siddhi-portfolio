import React from "react";
import { AboutMe } from "../components/aboutMe/AboutMe";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
