import React from "react";
import Navbar from "../Components/Layout/Navbar";
import Hero from "../Components/Landing/Hero";
import About from "../Components/Landing/About";
import Motto from "../Components/Landing/Motto";
import News from "../Components/Landing/News";
import Highlight from "../Components/Landing/Highlight";
import FrequentlyAskedQuestions from "../Components/Landing/FrequentlyAskedQuestions";
import WorkingWithUs from "../Components/Landing/WorkingWithUs";
import Footer from "../Components/Footer/Footer";

const Landing = () => {
  return (
    <Navbar>
      <Hero />
      <About />
      <Motto />
      <News />
      <Highlight />
      <FrequentlyAskedQuestions />
      <WorkingWithUs />
      <Footer />
    </Navbar>
  );
};

export default Landing;
