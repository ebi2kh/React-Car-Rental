import React from "react";

export const Brands = () => {
  return (
    <div className="car-brand py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive" /> Popular Brands
              </span>
              <h2 className="site-title">
                Our Top Quality <span>Brands</span>
              </h2>
              <div className="heading-divider" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3 col-lg-2">
            <a
              href="#"
              className="brand-item wow fadeInUp"
              data-wow-delay=".25s"
              style={{
                visibility: "visible",
                animationDelay: "0.25s",
                animationName: "fadeInUp",
              }}
            >
              <div className="brand-img">
                <img src="assets/img/brand/01.png" alt="" />
              </div>
              <h5>Ferrari</h5>
            </a>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <a
              href="#"
              className="brand-item wow fadeInUp"
              data-wow-delay=".50s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="brand-img">
                <img src="assets/img/brand/02.png" alt="" />
              </div>
              <h5>Hyundai</h5>
            </a>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <a
              href="#"
              className="brand-item wow fadeInUp"
              data-wow-delay=".75s"
              style={{
                visibility: "visible",
                animationDelay: "0.75s",
                animationName: "fadeInUp",
              }}
            >
              <div className="brand-img">
                <img src="assets/img/brand/03.png" alt="" />
              </div>
              <h5>Mercedes Benz</h5>
            </a>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <a
              href="#"
              className="brand-item wow fadeInUp"
              data-wow-delay="1s"
              style={{
                visibility: "visible",
                animationDelay: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="brand-img">
                <img src="assets/img/brand/04.png" alt="" />
              </div>
              <h5>Toyota</h5>
            </a>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <a
              href="#"
              className="brand-item wow fadeInUp"
              data-wow-delay="1.25s"
              style={{
                visibility: "visible",
                animationDelay: "1.25s",
                animationName: "fadeInUp",
              }}
            >
              <div className="brand-img">
                <img src="assets/img/brand/05.png" alt="" />
              </div>
              <h5>BMW</h5>
            </a>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <a
              href="#"
              className="brand-item wow fadeInUp"
              data-wow-delay="1.50s"
              style={{
                visibility: "visible",
                animationDelay: "1.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="brand-img">
                <img src="assets/img/brand/06.png" alt="" />
              </div>
              <h5>Nissan</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
