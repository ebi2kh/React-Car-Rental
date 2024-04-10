import React from "react";
import { useCars } from "../../context/CarContext";
import { Route, Link } from "react-router-dom";

export const CarGrid = () => {
  const { cars, filteredCars } = useCars();
  const carsToDisplay = filteredCars.length > 0 ? filteredCars : cars;
  return (
    <div className="car-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive" /> New Arrivals
              </span>
              <h2 className="site-title">
                Let's Check Latest <span>Cars</span>
              </h2>
              <div className="heading-divider" />
            </div>
          </div>
        </div>
        <div className="row">
          {carsToDisplay.map((car) => {
            return (
              <div key={car.id} className="col-md-6 col-lg-4 col-xl-3">
                <div
                  className="car-item wow fadeInUp"
                  data-wow-delay=".25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.25s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="car-img">
                    <span className="car-status status-1">Used</span>
                    <img src={car.image} alt="" />
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
                        <a href="#">{car.Make}</a>
                      </h4>
                      <div className="car-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul className="car-list">
                      <li>
                        <i className="far fa-steering-wheel" />
                        Automatic
                      </li>
                      <li>
                        <i className="far fa-road" />
                        10.15km / 1-litre
                      </li>
                      <li>
                        <i className="far fa-car" />
                        Model: {car.Model}
                      </li>
                      <li>
                        <i className="far fa-gas-pump" />
                        Hybrid
                      </li>
                    </ul>
                    <div className="car-footer">
                      <span className="car-price">تومان {car.Rental}</span>

                      <Link to={`/post/${car.id}`} className="theme-btn">
                        <span className="far fa-eye" />
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="theme-btn">
            Load More <i className="far fa-arrow-rotate-right" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
