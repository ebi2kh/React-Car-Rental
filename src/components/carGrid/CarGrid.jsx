import React from "react";
import im from "../../assets/images/dena.webp";
export const CarGrid = () => {
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
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <img src="assets/img/car/01.jpg" alt="" />
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
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div
              className="car-item wow fadeInUp"
              data-wow-delay=".50s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
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
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div
              className="car-item wow fadeInUp"
              data-wow-delay=".75s"
              style={{
                visibility: "visible",
                animationDelay: "0.75s",
                animationName: "fadeInUp",
              }}
            >
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
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div
              className="car-item wow fadeInUp"
              data-wow-delay="1s"
              style={{
                visibility: "visible",
                animationDelay: "1s",
                animationName: "fadeInUp",
              }}
            >
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
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <img src="assets/img/car/05.jpg" alt="" />
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
                    <a href="#">White Tesla Car</a>
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
                  <span className="car-price">$64,230</span>
                  <a href="#" className="theme-btn">
                    <span className="far fa-eye" />
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div
              className="car-item wow fadeInUp"
              data-wow-delay=".50s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="car-img">
                <span className="car-status status-2">New</span>
                <img src="assets/img/car/06.jpg" alt="" />
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
                    <a href="#">White Nissan Car</a>
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
                  <span className="car-price">$34,540</span>
                  <a href="#" className="theme-btn">
                    <span className="far fa-eye" />
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div
              className="car-item wow fadeInUp"
              data-wow-delay=".75s"
              style={{
                visibility: "visible",
                animationDelay: "0.75s",
                animationName: "fadeInUp",
              }}
            >
              <div className="car-img">
                <img src="assets/img/car/07.jpg" alt="" />
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
                    <a href="#">Mercedes Benz Suv</a>
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
                  <span className="car-price">$75,820</span>
                  <a href="#" className="theme-btn">
                    <span className="far fa-eye" />
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div
              className="car-item wow fadeInUp"
              data-wow-delay="1s"
              style={{
                visibility: "visible",
                animationDelay: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="car-img">
                <img src="assets/img/car/08.jpg" alt="" />
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
                    <a href="#">Red Hyundai Car</a>
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
                  <span className="car-price">$25,620</span>
                  <a href="#" className="theme-btn">
                    <span className="far fa-eye" />
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
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
