import React, { createContext, useContext, useState } from "react";
import carData from "../data.js";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(carData);
  const [filteredCars, setFilteredCars] = useState(carData);

  const filterCars = (make, location) => {
    let newFilteredCars = cars;

    if (make) {
      newFilteredCars = newFilteredCars.filter((car) => car.Make === make);
    }

    if (location) {
      newFilteredCars = newFilteredCars.filter(
        (car) => car.Location === location
      );
    }

    setFilteredCars(newFilteredCars);
  };
  return (
    <CarContext.Provider
      value={{
        cars,
        filteredCars,
        filterCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCars = () => useContext(CarContext);
