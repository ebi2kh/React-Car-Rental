import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCars } from "../../context/CarContext";
import Dropdown from "../utils/Dropdown";
export const Form = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedLocationText, setSelectedLocationText] =
    useState("انتخاب کنید");
  const { cars, filterCars, filteredCars } = useCars();
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLocation2Open, setIsLocation2Open] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  console.log(selectedLocation);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    filterCars(selectedMake, selectedLocation);
  };
  console.log(filteredCars);
  return (
    <div className="find-car">
      <div className="container">
        <div className="find-car-form">
          <h4 className="find-car-title">ماشین مدنظر خود را پیدا کنید</h4>
          <form action="#" onSubmit={handleSubmit}>
            <div className="row">
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
                            onClick={() => {
                              setSelectedMake(location);
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
              <div className="col-lg-3">
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
                  <span className="far fa-search" /> جستجو کنید
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
