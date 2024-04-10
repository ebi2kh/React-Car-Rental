import React, { createContext, useContext, useState } from "react";
import carData from "../data.js";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [filteredCars, setFilteredCars] = useState(carData);

  const filterCarsByLocation = (location) => {
    const filtered = carData.filter((car) => car.Location === location);
    setFilteredCars(filtered);
  };

  return (
    <CarContext.Provider
      value={{ cars: carData, filteredCars, filterCarsByLocation }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCars = () => useContext(CarContext);
