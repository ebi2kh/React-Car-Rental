import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CarProvider } from "./context/CarContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarSingle } from "./components/carGrid/CarSingle.jsx";
import About from "./pages/About.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
