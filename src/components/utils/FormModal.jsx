import React from "react";

export const FormModal = () => {
  return (
    <div style={{ maxHeight: "600px", width: "90vh", overflowY: "auto" }}>
      <div className="user-profile-wrapper">
        <div className="user-profile-card">
          <h4 className="user-profile-card-title">Add New Listing</h4>
          <div className="col-lg-12">
            <div className="add-listing-form">
              <h6 className="mb-1">Basic Information</h6>
              <form action="#">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Listing Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter title"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Condition</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>New</option>
                        <option value={2}>Used</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            New
                          </li>
                          <li data-value={2} className="option">
                            Used
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Body Type</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>Sedan</option>
                        <option value={2}>Compact</option>
                        <option value={3}>Coupe</option>
                        <option value={4}>Wagon</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            Sedan
                          </li>
                          <li data-value={2} className="option">
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
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Make/Brand</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>BMW</option>
                        <option value={2}>Ferrari</option>
                        <option value={3}>Marcediz Benz</option>
                        <option value={4}>Hyundai</option>
                        <option value={5}>Nissan</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            BMW
                          </li>
                          <li data-value={2} className="option">
                            Ferrari
                          </li>
                          <li data-value={3} className="option">
                            Marcediz Benz
                          </li>
                          <li data-value={4} className="option">
                            Hyundai
                          </li>
                          <li data-value={5} className="option">
                            Nissan
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Model</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>A3</option>
                        <option value={2}>A4</option>
                        <option value={3}>A6</option>
                        <option value={4}>Q4</option>
                        <option value={5}>Q7</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            A3
                          </li>
                          <li data-value={2} className="option">
                            A4
                          </li>
                          <li data-value={3} className="option">
                            A6
                          </li>
                          <li data-value={4} className="option">
                            Q4
                          </li>
                          <li data-value={5} className="option">
                            Q7
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Price (USD)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter price"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Year</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>2023</option>
                        <option value={2}>2022</option>
                        <option value={3}>2021</option>
                        <option value={4}>2020</option>
                        <option value={5}>2019</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            2023
                          </li>
                          <li data-value={2} className="option">
                            2022
                          </li>
                          <li data-value={3} className="option">
                            2021
                          </li>
                          <li data-value={4} className="option">
                            2020
                          </li>
                          <li data-value={5} className="option">
                            2019
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Drive Type</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>Automatic</option>
                        <option value={2}>Semi Auto</option>
                        <option value={3}>Manual</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            Automatic
                          </li>
                          <li data-value={2} className="option">
                            Semi Auto
                          </li>
                          <li data-value={3} className="option">
                            Manual
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Transmission</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>Automatic</option>
                        <option value={2}>Manual</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            Automatic
                          </li>
                          <li data-value={2} className="option">
                            Manual
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Fuel Type</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>Diesel</option>
                        <option value={2}>Petrol</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            Diesel
                          </li>
                          <li data-value={2} className="option">
                            Petrol
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Mileage</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter mileage"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Engine Size</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter engine size"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Cylenders</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>4</option>
                        <option value={2}>6</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            4
                          </li>
                          <li data-value={2} className="option">
                            6
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Color</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>Red</option>
                        <option value={2}>White</option>
                        <option value={3}>Black</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            Red
                          </li>
                          <li data-value={2} className="option">
                            White
                          </li>
                          <li data-value={3} className="option">
                            Black
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Doors</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value="">Choose</option>
                        <option value={1}>2</option>
                        <option value={2}>4</option>
                        <option value={3}>6</option>
                      </select>
                      <div className="nice-select select" tabIndex={0}>
                        <span className="current">Choose</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose
                          </li>
                          <li data-value={1} className="option">
                            2
                          </li>
                          <li data-value={2} className="option">
                            4
                          </li>
                          <li data-value={3} className="option">
                            6
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>VIN</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter VIN"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Tags or keyword</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter tags ex: car,red"
                      />
                    </div>
                  </div>
                  <h6 className="fw-bold mt-4 mb-1">Upload Images</h6>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="list-upload-wrapper">
                        <div className="list-img-upload">
                          <span>
                            <i className="far fa-images" /> Upload Listing
                            Images
                          </span>
                        </div>
                        <input
                          type="file"
                          className="list-img-file"
                          multiple=""
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="fw-bold mt-4 mb-1">Location</h6>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter city"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter state"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter zip code"
                      />
                    </div>
                  </div>
                  <h6 className="fw-bold mt-4 mb-1">Detailed Information</h6>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Write description"
                        cols={30}
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <h6 className="fw-bold my-4">Features</h6>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature1"
                      />
                      <label className="form-check-label" htmlFor="feature1">
                        Multi-zone A/C
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature2"
                      />
                      <label className="form-check-label" htmlFor="feature2">
                        Adaptive Cruise Control
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature3"
                      />
                      <label className="form-check-label" htmlFor="feature3">
                        Sunroof
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature4"
                      />
                      <label className="form-check-label" htmlFor="feature4">
                        Heated front seats
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature5"
                      />
                      <label className="form-check-label" htmlFor="feature5">
                        Cooled Seats
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature6"
                      />
                      <label className="form-check-label" htmlFor="feature6">
                        Panoramic roof
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature7"
                      />
                      <label className="form-check-label" htmlFor="feature7">
                        Navigation system
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature8"
                      />
                      <label className="form-check-label" htmlFor="feature8">
                        Keyles Start
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature9"
                      />
                      <label className="form-check-label" htmlFor="feature9">
                        Bluetooth
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature10"
                      />
                      <label className="form-check-label" htmlFor="feature10">
                        Antilock brakes
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="feature"
                        type="checkbox"
                        defaultValue=""
                        id="feature11"
                      />
                      <label className="form-check-label" htmlFor="feature11">
                        Android Auto
                      </label>
                    </div>
                  </div>
                  <h6 className="fw-bold mt-4 mb-1">Contact Information</h6>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone"
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="agree"
                        type="checkbox"
                        defaultValue=""
                        id="agree"
                      />
                      <label className="form-check-label" htmlFor="agree">
                        I Agree With Your Terms Of Services And Privacy Policy.
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 my-4">
                    <button type="submit" className="theme-btn">
                      <span className="far fa-save" /> Save &amp; Publish
                      Listing
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
