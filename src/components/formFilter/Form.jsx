import React from "react";
// import im from "../../assets/img/slider/2.jpg";
export const Form = () => {
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
                  <label>Car Model</label>
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
                  <label>Choose Year</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Year</option>
                    <option value={2}>2023</option>
                    <option value={3}>2022</option>
                    <option value={4}>2021</option>
                    <option value={5}>2020</option>
                  </select>
                  <div className="nice-select select" tabIndex={0}>
                    <span className="current">All Year</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Year
                      </li>
                      <li data-value={2} className="option">
                        2023
                      </li>
                      <li data-value={3} className="option">
                        2022
                      </li>
                      <li data-value={4} className="option">
                        2021
                      </li>
                      <li data-value={5} className="option">
                        2020
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Choose Milieage</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Milieage</option>
                    <option value={2}>2000 Miles</option>
                    <option value={3}>3000 Miles</option>
                    <option value={4}>4000 Miles</option>
                    <option value={5}>5000 Miles</option>
                  </select>
                  <div className="nice-select select" tabIndex={0}>
                    <span className="current">All Milieage</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Milieage
                      </li>
                      <li data-value={2} className="option">
                        2000 Miles
                      </li>
                      <li data-value={3} className="option">
                        3000 Miles
                      </li>
                      <li data-value={4} className="option">
                        4000 Miles
                      </li>
                      <li data-value={5} className="option">
                        5000 Miles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Price Range</label>
                  <select className="select" style={{ display: "none" }}>
                    <option value={1}>All Price</option>
                    <option value={2}>$1,000 - $5,000</option>
                    <option value={3}>$5,000 - $10,000</option>
                    <option value={4}>$15,000 - $20,000</option>
                    <option value={5}>$20,000 - $25,000</option>
                    <option value={6}>$25,000 - $30,000</option>
                  </select>
                  <div className="nice-select select" tabIndex={0}>
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
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Body Type</label>
                  <select className="select" style={{ display: "none" }}>
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
