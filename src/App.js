import React from "react";
import { AboutMe, Contact, Footer, Hero, Navbar, Projects } from "./components";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
