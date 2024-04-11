import React from "react";

export const RelatedCar = () => {
  return (
    <div className="row" style={{ flexDirection: "column" }}>
      <div className="car-item">
        <div className="car-img">
          <span className="car-status status-1">Used</span>
          <img src="" alt="" />
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
              <a href="#">Mercedes Benz Car</a>
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
              Model: 2023
            </li>
            <li>
              <i className="far fa-gas-pump" />
              Hybrid
            </li>
          </ul>
          <div className="car-footer">
            <span className="car-price">$45,620</span>
            <a href="#" className="theme-btn">
              <span className="far fa-eye" />
              Details
            </a>
          </div>
        </div>
      </div>

      <div className="car-item">
        <div className="car-img">
          <img src="assets/img/car/02.jpg" alt="" />
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
              <a href="#">Yellow Ferrari 458</a>
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
              Model: 2023
            </li>
            <li>
              <i className="far fa-gas-pump" />
              Hybrid
            </li>
          </ul>
          <div className="car-footer">
            <span className="car-price">$90,250</span>
            <a href="#" className="theme-btn">
              <span className="far fa-eye" />
              Details
            </a>
          </div>
        </div>
      </div>

      <div className="car-item">
        <div className="car-img">
          <img src="assets/img/car/03.jpg" alt="" />
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
              <a href="#">Black Audi Q7</a>
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
              Model: 2023
            </li>
            <li>
              <i className="far fa-gas-pump" />
              Hybrid
            </li>
          </ul>
          <div className="car-footer">
            <span className="car-price">$44,350</span>
            <a href="#" className="theme-btn">
              <span className="far fa-eye" />
              Details
            </a>
          </div>
        </div>
      </div>

      <div className="car-item">
        <div className="car-img">
          <span className="car-status status-2">New</span>
          <img src="assets/img/car/04.jpg" alt="" />
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
              <a href="#">BMW Sports Car</a>
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
              Model: 2023
            </li>
            <li>
              <i className="far fa-gas-pump" />
              Hybrid
            </li>
          </ul>
          <div className="car-footer">
            <span className="car-price">$78,760</span>
            <a href="#" className="theme-btn">
              <span className="far fa-eye" />
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
