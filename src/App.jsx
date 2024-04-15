import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/header/Navbar";
import "./assets/css/style.css";
import { Form } from "./components/formFilter/Form";
import { Hero } from "./components/header/Hero";
import { AboutSection } from "./components/static/AboutSection";
import { CarGrid } from "./components/carGrid/CarGrid";
import { CarProvider } from "./context/CarContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarSingle } from "./components/carGrid/CarSingle";
import TransitionsModal from "./components/utils/TransitionsModal";
// import { Hero } from "./components/header/Hero";
import Counter from "./components/static/Counter";
// import { AboutSection } from "./components/static/AboutSection";
// import { Form } from "./components/formFilter/Form";
// import { Testimonials } from "./components/static/Testimonials";
// import { CarGrid } from "./components/carGrid/CarGrid";
import Footer from "./pages/Footer";
import Choose from "./components/static/Choose";
import Download from "./components/static/Download";
import Testimonials from "./components/static/Testimonials";
import About from "./pages/About.jsx";
function App() {
  return (
    <>
      {/* <TransitionsModal /> */}
      {/* <Hero /> <AboutSection />
      <Form />
      <CarGrid />
      <Counter />
      <Testimonials />
      <Choose />
      <Download /> */}

      <Navbar />
      <BrowserRouter>
        <CarProvider>
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="about" element={<About />} />
            <Route path="/post/:id" element={<CarSingle />} />
          </Routes>
        </CarProvider>
      </BrowserRouter>
      {/* <CarSingle /> */}
      {/* <Hero />
      <AboutSection />
      <Form />
      <CarGrid /> */}
      <Footer />
      {/* <>
    <CarProvider>
      <Navbar />
      <CarList/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes></CarProvider>
    </> */}
    </>
  );
}

export default App;
