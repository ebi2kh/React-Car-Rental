import React from "react";
import { Hero } from "../components/header/Hero";
import { Form } from "../components/formFilter/Form";
import { AboutSection } from "../components/static/AboutSection";
import { CarGrid } from "../components/carGrid/CarGrid";
import Counter from "../components/static/Counter";
import Testimonials from "../components/static/Testimonials";
import Download from "../components/static/Download";
import Choose from "../components/static/Choose";

const HomePages = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Form />
      <CarGrid />
      <Counter />

      <Choose />
      <Download />
    </>
  );
};

export default HomePages;
