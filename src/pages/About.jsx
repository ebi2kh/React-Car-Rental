import React from "react";
import { AboutSection } from "../components/static/AboutSection";
import Counter from "../components/static/Counter";
import Testimonials from "../components/static/Testimonials";

const About = () => {
  return (
    <>
      <div
        className="site-breadcrumb"
        style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">About Us</h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>

      <AboutSection />
      <Counter />
      <Testimonials />
    </>
  );
};

export default About;
