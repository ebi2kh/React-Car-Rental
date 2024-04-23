import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCars } from "../../context/CarContext";
import Dropdown from "../utils/Dropdown";
export const Form = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const { cars, filterCars, filteredCars, hasFiltered } = useCars();

  const [startDate, setStartDate] = useState(new Date());
  console.log(selectedLocation);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    filterCars(selectedMake, selectedLocation);
    // hasFiltered(true);
  };

  console.log(selectedMake);
  return (
    <div className="find-car">
      <div className="container">
        <div className="find-car-form">
          <h4 className="find-car-title">ماشین مدنظر خود را پیدا کنید</h4>
          <form action="#" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label>مدل</label>
                  <select
                    className="nice-select select center"
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                  >
                    <option value="">تمام مدل‌ها</option>
                    {[...new Set(cars.map((car) => car.Make))].map(
                      (make, index) => (
                        <option key={index} value={make}>
                          {make}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>محل تحویل</label>
                  <select
                    className="nice-select select center"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="">تمام شهر‌ها</option>
                    {[...new Set(cars.map((car) => car.Location))].map(
                      (location, index) => (
                        <option key={index} value={location}>
                          {location}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>محل بازگشت</label>
                  <select className="nice-select select center">
                    <option value="">تمام شهر‌ها</option>
                    {[...new Set(cars.map((car) => car.Location))].map(
                      (location, index) => (
                        <option key={index} value={index + 2}>
                          {location}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>تاریخ تحویل</label>

                  <DatePicker
                    className="nice-select select open"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>تاریخ بازگشت</label>

                  <DatePicker
                    className="nice-select select open"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
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
