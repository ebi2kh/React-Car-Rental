import React from "react";

export const CarSingle = () => {
  return (
    <div className="car-item-single bg py-120">
      <div className="container">
        <div className="car-single-wrapper">
          <div className="row">
            <div className="col-lg-8">
              <div className="car-single-details">
                <div className="car-single-widget">
                  <div className="car-single-top">
                    <span className="car-status status-1">Brand New</span>
                    <h3 className="car-single-title">Mercedes Benz Car</h3>
                    <ul className="car-single-meta">
                      <li>
                        <i className="far fa-clock" /> Listed On: Sat, Jan 25,
                        2023
                      </li>
                      <li>
                        <i className="far fa-eye" /> Views: 850
                      </li>
                    </ul>
                  </div>
                  <div className="car-single-slider">
                    <div className="item-gallery">
                      <div className="flexslider-thumbnails">
                        <div
                          className="flex-viewport"
                          style={{ overflow: "hidden", position: "relative" }}
                        >
                          <ul
                            className="slides"
                            style={{
                              width: "1200%",
                              transitionDuration: "0s",
                              transform: "translate3d(-735.958px, 0px, 0px)",
                            }}
                          >
                            <li
                              data-thumb="assets/img/car/single-4.jpg"
                              className="clone"
                              style={{
                                width: "735.958px",
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img src="assets/img/car/single-4.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="assets/img/car/single-1.jpg"
                              className="flex-active-slide"
                              style={{
                                width: "735.958px",
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img src="assets/img/car/single-1.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="assets/img/car/single-2.jpg"
                              style={{
                                width: "735.958px",
                                float: "left",
                                display: "block",
                              }}
                              className=""
                            >
                              <img src="assets/img/car/single-2.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="assets/img/car/single-3.jpg"
                              style={{
                                width: "735.958px",
                                float: "left",
                                display: "block",
                              }}
                              className=""
                            >
                              <img src="assets/img/car/single-3.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="assets/img/car/single-4.jpg"
                              style={{
                                width: "735.958px",
                                float: "left",
                                display: "block",
                              }}
                              className=""
                            >
                              <img src="assets/img/car/single-4.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="assets/img/car/single-1.jpg"
                              className="clone"
                              style={{
                                width: "735.958px",
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img src="assets/img/car/single-1.jpg" alt="#" />
                            </li>
                          </ul>
                        </div>
                        <ol className="flex-control-nav flex-control-thumbs">
                          <li>
                            <img
                              src="assets/img/car/single-1.jpg"
                              className="flex-active"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/car/single-2.jpg"
                              className=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/car/single-3.jpg"
                              className=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/car/single-4.jpg"
                              className=""
                            />
                          </li>
                        </ol>
                        <ul className="flex-direction-nav">
                          <li>
                            <a className="flex-prev" href="#" />
                          </li>
                          <li>
                            <a className="flex-next" href="#" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="car-single-widget">
                  <h4 className="mb-4">Key Information</h4>
                  <div className="car-key-info">
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>Body Type</span>
                            <h6>Coupe</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>Condition</span>
                            <h6>Brand New</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-speedometer" />
                          </div>
                          <div className="car-key-content">
                            <span>Mileage</span>
                            <h6>50,000 (Mi)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-settings" />
                          </div>
                          <div className="car-key-content">
                            <span>Transmission</span>
                            <h6>Autometic</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>Year</span>
                            <h6>2023</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-gas-station" />
                          </div>
                          <div className="car-key-content">
                            <span>Fuel Type</span>
                            <h6>Diesel</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>Color</span>
                            <h6>Red</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>Doors</span>
                            <h6>2 Doors</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>Cylinders</span>
                            <h6>05</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>Engine Size</span>
                            <h6>2,000 (cc)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>VIN</span>
                            <h6>532GAFDSUY</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="car-single-widget">
                  <div className="car-single-overview">
                    <h4 className="mb-3">Description</h4>
                    <div className="mb-4">
                      <p>
                        There are many variations of passages orem psum
                        available but the majority have suffered alteration in
                        some form by injected humour or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary making
                        this the first true generator on the internet.
                      </p>
                      <p className="mt-2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters as opposed to using Content here content here
                        making it look like readable English.
                      </p>
                    </div>
                    <h4 className="mb-3">Car Features</h4>
                    <div className="row mb-3">
                      <div className="col-lg-4">
                        <ul className="car-single-list">
                          <li>
                            <i className="far fa-check-circle" /> Multi-zone A/C
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Heated front
                            seats
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Navigation
                            system
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Leather seats
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul className="car-single-list">
                          <li>
                            <i className="far fa-check-circle" /> Premium sound
                            system
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Bluetooth
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Andriod Auto
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Intermittent
                            wipers
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul className="car-single-list">
                          <li>
                            <i className="far fa-check-circle" /> Memory seat
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Adaptive
                            Cruise Control
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Cooled Seats
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> Keyles Start
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h4 className="mb-4">Vehicle History</h4>
                    <div className="mb-4">
                      <ul className="car-single-list">
                        <li>
                          <i className="far fa-check-circle" /> It is a long
                          established fact that a reader will be distracted{" "}
                        </li>
                        <li>
                          <i className="far fa-check-circle" /> Sed perspic unde
                          omnis iste natus sit voluptatem accusantium
                        </li>
                        <li>
                          <i className="far fa-check-circle" /> Explain to you
                          how all this mistaken idea of denouncing pleasure
                        </li>
                        <li>
                          <i className="far fa-check-circle" /> Praising pain
                          was born will give account of the system
                        </li>
                      </ul>
                    </div>
                    <h4 className="mb-4">Location</h4>
                    <div className="car-single-map">
                      <div className="contact-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="car-single-widget"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="car-single-widget">
                <h4 className="car-single-price">$50,560</h4>
                <ul className="car-single-meta">
                  <li>
                    <i className="fa-regular fa-gauge-high" /> 50k Miles
                  </li>
                  <li>
                    <i className="far fa-location-dot" /> 25/B Milford, New York
                  </li>
                </ul>
              </div>
              <div className="car-single-widget">
                <div className="car-single-author">
                  <img src="assets/img/car/author.jpg" alt="" />
                  <div className="car-single-author-content">
                    <h5>Marid Anderson</h5>
                    <span>Customer Advisor</span>
                    <div className="car-single-author-social">
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="car-single-widget">
                <h5 className="mb-3">Contact Details</h5>
                <div className="car-single-form">
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Write Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="theme-btn">
                        Send Now
                        <i className="fas fa-arrow-right-long" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="car-single-related mt-5">
            <h3 className="mb-30">Related Listing</h3>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="car-item">
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
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
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
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
