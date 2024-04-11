import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCars } from "../../context/CarContext";
import Dropdown from "../utils/Dropdown";
export const Form = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationText, setSelectedLocationText] =
    useState("انتخاب کنید");
  const { cars, filterCarsByLocation, filteredCars } = useCars();
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLocation2Open, setIsLocation2Open] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  console.log(selectedLocation);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    filterCarsByLocation(selectedLocation);
  };

  console.log(filteredCars);
  return (
    <div className="find-car">
      <div className="container">
        <div className="find-car-form">
          <h4 className="find-car-title">Let's Find Your Perfect Car</h4>
          <form action="#" onSubmit={handleSubmit}>
            <div className="row">
              {/* <div className="col-lg-3">
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
              </div> */}
              {/* <div className="col-lg-3">
                <div className="form-group">
                  <label>Brand Name</label>
                  <Dropdown
                    defaultOption="All Locations"
                    options={[...new Set(cars.map((car) => car.Make))]}
                    onSelect={handleValueSelection}
                  />
                </div>
              </div> */}
              <div className="col-lg-3">
                <div className="form-group">
                  <label>مدل </label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>تمام مدل‌ها</option>
                    {[...new Set(cars.map((car) => car.Make))].map(
                      (location, index) => (
                        <option key={index} value={index + 2}>
                          {location}
                        </option>
                      )
                    )}
                  </select>

                  <div
                    className={`nice-select select ${isMakeOpen ? "open" : ""}`}
                    tabIndex={0}
                    onClick={() => setIsMakeOpen(!isMakeOpen)}
                  >
                    <span className="current">تمام مدل‌ها</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        تمام مدل‌ها
                      </li>
                      {[...new Set(cars.map((car) => car.Make))].map(
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
                  <label>نوع اتومبیل</label>

                  <Dropdown
                    defaultOption="All Locations"
                    options={[...new Set(cars.map((car) => car.Model))]}
                  />
                </div> */}
                <div className="form-group">
                  <label>محل تحویل</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>انتخاب کنید</option>
                    {[...new Set(cars.map((car) => car.Location))].map(
                      (location, index) => (
                        <option key={index} value={index + 2}>
                          {location}
                        </option>
                      )
                    )}
                  </select>

                  <div
                    className={`nice-select select ${
                      isLocationOpen ? "open" : ""
                    }`}
                    tabIndex={0}
                    onClick={() => setIsLocationOpen(!isLocationOpen)}
                  >
                    <span className="current">{selectedLocationText}</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        انتخاب کنید
                      </li>
                      {[...new Set(cars.map((car) => car.Location))].map(
                        (location, index) => (
                          <li
                            key={index}
                            data-value={index + 2}
                            className="option"
                            onClick={() => {
                              setSelectedLocation(location);
                              setSelectedLocationText(location);
                            }}
                          >
                            {location}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3">
                <div className="form-group">
                  <label>محل تحویل</label>
                  <Dropdown
                    defaultOption="All Locations"
                    options={[...new Set(cars.map((car) => car.Location))]}
                  />
                </div>
              </div> */}
              {/* <div className="col-lg-3">
                <div className="form-group">
                  <label>محل بازگشت</label>
                  <Dropdown
                    defaultOption="All Years"
                    options={[...new Set(cars.map((car) => car.Location))]}
                  />
                </div>
              </div> */}
              <div className="col-lg-3">
                <div className="form-group">
                  <label>محل بازگشت</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>انتخاب کنید</option>
                    {[...new Set(cars.map((car) => car.Location))].map(
                      (location, index) => (
                        <option key={index} value={index + 2}>
                          {location}
                        </option>
                      )
                    )}
                  </select>

                  <div
                    className={`nice-select select ${
                      isLocation2Open ? "open" : ""
                    }`}
                    tabIndex={0}
                    onClick={() => setIsLocation2Open(!isLocation2Open)}
                  >
                    <span className="current">انتخاب کنید</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        انتخاب کنید
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
