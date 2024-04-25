import React from "react";
import { useCars } from "../../context/CarContext";
import { Link } from "react-router-dom";
export const RelatedCar = () => {
  const { cars } = useCars();

  // Function to get 5 random cars
  const getRandomCars = (carsArray, num) => {
    const shuffled = [...carsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomCars = getRandomCars(cars, 5);

  return (
    // <div className="row" style={{ flexDirection: "column" }}>
    //   <div className="car-item">
    //     <div className="car-img">
    //       <span className="car-status status-1">Used</span>
    //       <img src="" alt="" />
    //       <div className="car-btns">
    //         <a href="#">
    //           <i className="far fa-heart" />
    //         </a>
    //         <a href="#">
    //           <i className="far fa-arrows-repeat" />
    //         </a>
    //       </div>
    //     </div>
    //     <div className="car-content">
    //       <div className="car-top">
    //         <h4>
    //           <a href="#">Mercedes Benz Car</a>
    //         </h4>
    //         <div className="car-rate">
    //           <i className="fas fa-star" />
    //           <i className="fas fa-star" />
    //           <i className="fas fa-star" />
    //           <i className="fas fa-star" />
    //           <i className="fas fa-star" />
    //           <span>5.0 (58.5k Review)</span>
    //         </div>
    //       </div>
    //       <ul className="car-list">
    //         <li>
    //           <i className="far fa-steering-wheel" />
    //           Automatic
    //         </li>
    //         <li>
    //           <i className="far fa-road" />
    //           10.15km / 1-litre
    //         </li>
    //         <li>
    //           <i className="far fa-car" />
    //           Model: 2023
    //         </li>
    //         <li>
    //           <i className="far fa-gas-pump" />
    //           Hybrid
    //         </li>
    //       </ul>
    //       <div className="car-footer">
    //         <span className="car-price">$45,620</span>
    //         <a href="#" className="theme-btn">
    //           <span className="far fa-eye" />
    //           Details
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    // </div>

    <div className="row" style={{ flexDirection: "column" }}>
      {randomCars.map((car, index) => (
        <div key={index} className="car-item">
          <div className="car-img">
            <span className="car-status status-1">{car.status}</span>
            <img src={car.image} alt={car.Model} />
            <div className="car-btns">
              <a href="#">
                <i className="far fa-heart" />
              </a>
              <a href="#">
                <i className="far fa-arrows-repeat" />
              </a>
            </div>
          </div>
          <div className="car-content">
            <div className="car-top">
              <h4>
                <a href="#">{car.Model}</a>
              </h4>
              <div className="car-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span> 4.4 (6 دیدگاه)</span>
              </div>
            </div>
            <ul className="car-list">
              <li>
                <i className="far fa-steering-wheel" />
                {car.Transmission}
              </li>
              <li>
                <i className="far fa-road" />
                1000
              </li>
              <li>
                <i className="far fa-car" />
                مدل: {car.Model}
              </li>
              <li>
                <i className="far fa-gas-pump" />
                {car.Fuel}
              </li>
            </ul>
            <div className="car-footer">
              <span className="car-price">تومان{car.Rental}</span>
              <Link to={`/post/${car.id}`} className="theme-btn">
                <span className="far fa-eye" />
                جزییات
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
