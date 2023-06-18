import React from "react";
import { AboutMe } from "../components/aboutMe/AboutMe";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { Navbar } from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
