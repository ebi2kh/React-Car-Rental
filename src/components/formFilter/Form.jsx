import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCars } from "../../context/CarContext";
export const Form = () => {
  const { cars } = useCars();
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
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
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Brand</option>
                    <option value={2}>BMW</option>
                    <option value={3}>Ferrari</option>
                    <option value={4}>Marcediz Benz</option>
                    <option value={5}>Hyundai</option>
                    <option value={6}>Nissan</option>
                  </select>
                  <div className="nice-select select" tabIndex={0}>
                    <span className="current">All Brand</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Brand
                      </li>
                      <li data-value={2} className="option">
                        BMW
                      </li>
                      <li data-value={3} className="option">
                        Ferrari
                      </li>
                      <li data-value={4} className="option">
                        Marcediz Benz
                      </li>
                      <li data-value={5} className="option">
                        Hyundai
                      </li>
                      <li data-value={6} className="option">
                        Nissan
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>نوع اتومبیل</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Model</option>
                    <option value={2}>3-Series </option>
                    <option value={3}>Carrera</option>
                    <option value={4}>G-TR</option>
                    <option value={3}>Macan</option>
                    <option value={3}>N-Series</option>
                  </select>
                  <div className="nice-select select" tabIndex={0}>
                    <span className="current">All Model</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Model
                      </li>
                      <li data-value={2} className="option">
                        3-Series{" "}
                      </li>
                      <li data-value={3} className="option">
                        Carrera
                      </li>
                      <li data-value={4} className="option">
                        G-TR
                      </li>
                      <li data-value={3} className="option">
                        Macan
                      </li>
                      <li data-value={3} className="option">
                        N-Series
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>محل تحویل</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Locations</option>
                    {[...new Set(cars.map((car) => car.Location))].map(
                      (location, index) => (
                        <option key={index} value={index + 2}>
                          {location}
                        </option>
                      )
                    )}
                  </select>

                  {/* <div className="nice-select select " tabIndex={0}> */}

                  <div
                    className={`nice-select select ${isOpen ? "open" : ""}`}
                    tabIndex={0}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="current">All Locations</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Locations
                      </li>
                      {[...new Set(cars.map((car) => car.Location))].map(
                        (location, index) => (
                          <li
                            key={index}
                            data-value={index + 2}
                            className="option"
                          >
                            {location}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>محل تحویل</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Locations</option>
                    {[...new Set(cars.map((car) => car.Location))].map(
                      (location, index) => (
                        <option key={index} value={index + 2}>
                          {location}
                        </option>
                      )
                    )}
                  </select>

                  {/* <div className="nice-select select " tabIndex={0}> */}

                  <div
                    className={`nice-select select ${isOpen ? "open" : ""}`}
                    tabIndex={0}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="current">All Locations</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Locations
                      </li>
                      {[...new Set(cars.map((car) => car.Location))].map(
                        (location, index) => (
                          <li
                            key={index}
                            data-value={index + 2}
                            className="option"
                          >
                            {location}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                {/* <div className="form-group">
                  <label>تاریخ تحویل</label> */}
                {/* <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Price</option>
                    <option value={2}>$1,000 - $5,000</option>
                    <option value={3}>$5,000 - $10,000</option>
                    <option value={4}>$15,000 - $20,000</option>
                    <option value={5}>$20,000 - $25,000</option>
                    <option value={6}>$25,000 - $30,000</option>
                  </select>
                  <div className="nice-select select " tabIndex={0}>
                    <span className="current">All Price</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Price
                      </li>
                      <li data-value={2} className="option">
                        $1,000 - $5,000
                      </li>
                      <li data-value={3} className="option">
                        $5,000 - $10,000
                      </li>
                      <li data-value={4} className="option">
                        $15,000 - $20,000
                      </li>
                      <li data-value={5} className="option">
                        $20,000 - $25,000
                      </li>
                      <li data-value={6} className="option">
                        $25,000 - $30,000
                      </li>
                    </ul>
                  </div> */}
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
                {/* <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Body Type</option>
                    <option value={2}>Sedan</option>
                    <option value={5}>Compact</option>
                    <option value={3}>Coupe</option>
                    <option value={4}>Wagon</option>
                  </select>
                  <div className="nice-select select" tabIndex={0}>
                    <span className="current">All Body Type</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Body Type
                      </li>
                      <li data-value={2} className="option">
                        Sedan
                      </li>
                      <li data-value={5} className="option">
                        Compact
                      </li>
                      <li data-value={3} className="option">
                        Coupe
                      </li>
                      <li data-value={4} className="option">
                        Wagon
                      </li>
                    </ul>
                  </div> */}
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
