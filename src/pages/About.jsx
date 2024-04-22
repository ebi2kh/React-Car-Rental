import React from "react";
import { AboutSection } from "../components/static/AboutSection";
import Counter from "../components/static/Counter";
import Testimonials from "../components/static/Testimonials";
import im from "../assets/img/breadcrumb/01.jpg";
const About = () => {
  return (
    <>
      <div className="site-breadcrumb" style={{ background: `url(${im})` }}>
        <div className="container">
          <h2 className="breadcrumb-title">درباره ما</h2>
          <ul className="breadcrumb-menu"></ul>
        </div>
      </div>

      <AboutSection />
      <Counter />
    </>
  );
};

export default About;
