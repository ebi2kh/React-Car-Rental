import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/header/Navbar";
import "./assets/css/style.css";
import { Form } from "./components/formFilter/Form";
import { Hero } from "./components/header/Hero";
import { AboutSection } from "./components/static/AboutSection";
// import { Hero } from "./components/header/Hero";
// import { AboutSection } from "./components/static/AboutSection";
// import { Form } from "./components/formFilter/Form";
// import { Testimonials } from "./components/static/Testimonials";
// import { CarGrid } from "./components/carGrid/CarGrid";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Form />
      <AboutSection />
      {/* <Hero />
      <AboutSection />
      <Form />
      <CarGrid /> */}
    </>
  );
}

export default App;
