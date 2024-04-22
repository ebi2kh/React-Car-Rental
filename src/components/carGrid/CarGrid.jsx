import { useState } from "react";
import { useCars } from "../../context/CarContext";
import { Route, Link } from "react-router-dom";
import TransitionsModal from "../utils/TransitionsModal";
export const CarGrid = () => {
  const { cars, filteredCars } = useCars();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const carsToDisplay = filteredCars.length > 0 ? filteredCars : cars;
  return (
    <div className="car-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive" /> لیست خودروها
              </span>
              <h2 className="site-title">
                آخرین <span>خودروها</span>
              </h2>
              <div className="heading-divider" />
            </div>
          </div>
        </div>
        <div className="row">
          {carsToDisplay.map((car) => {
            return (
              <div key={car.id} className="col-md-6 col-lg-6 col-xl-4">
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
                    <span className="car-status status-1">جدید</span>
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
                        <span>5.0 (58.5k براساس)</span>
                      </div>
                    </div>
                    <ul className="car-list">
                      <li>
                        <i className="far fa-steering-wheel" />
                        {car.Transmission}
                      </li>
                      <li>
                        <i className="far fa-road" />
                        10.15km / یک لیتر
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
                      <span className="car-price">{car.Rental}تومان/ساعت </span>

                      <Link to={`/post/${car.id}`} className="theme-btn">
                        <span className="far fa-eye" />
                        جزییات
                      </Link>
                    </div>
                  </div>
                  <a
                    to={"#"}
                    className="theme-btn"
                    style={{
                      width: "90%",
                      margin: "0 20px",
                      background: "var(--color-blue)",
                      color: "white",
                    }}
                    onClick={openModal}
                  >
                    {/* <span className="far fa-eye" /> */}

                    {/* {isModalOpen && ( */}
                    <TransitionsModal title="سفارش سریع" onClose={closeModal} />
                    {/* )} */}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
