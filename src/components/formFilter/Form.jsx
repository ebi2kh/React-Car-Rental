import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCars } from "../../context/CarContext";
import Dropdown from "../utils/Dropdown";
export const Form = () => {
  const { cars } = useCars();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="find-car">
      <div className="container">
        <div className="find-car-form">
          <h4 className="find-car-title">Let's Find Your Perfect Car</h4>
          <form action="#">
            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Car Condition</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Status</option>
                    <option value={2}>New Car</option>
                    <option value={3}>Used Car</option>
                  </select>
                  <div className="nice-select select" tabIndex={0}>
                    <span className="current">All Status</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Status
                      </li>
                      <li data-value={2} className="option">
                        New Car
                      </li>
                      <li data-value={3} className="option">
                        Used Car
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Brand Name</label>
                  <Dropdown
                    defaultOption="All Locations"
                    options={[...new Set(cars.map((car) => car.Make))]}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>نوع اتومبیل</label>

                  <Dropdown
                    defaultOption="All Locations"
                    options={[...new Set(cars.map((car) => car.Model))]}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>محل تحویل</label>
                  <Dropdown
                    defaultOption="All Locations"
                    options={[...new Set(cars.map((car) => car.Location))]}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>محل بازگشت</label>
                  <Dropdown
                    defaultOption="All Years"
                    options={[...new Set(cars.map((car) => car.Location))]}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>تاریخ تحویل</label>
                  <div className="nice-select select open" tabIndex={0}>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>تاریخ بازگشت</label>
                  <div className="nice-select select open" tabIndex={0}>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 align-self-end">
                <button className="theme-btn" type="submit">
                  <span className="far fa-search" /> Find Your Car
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
