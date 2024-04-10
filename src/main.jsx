import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CarProvider } from "./context/CarContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarProvider>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/post/:id" element={<CarSingle />} /> */}
        </Routes>
      </CarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
