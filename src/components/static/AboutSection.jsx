import React from "react";

export const AboutSection = () => {
  return (
    <div className="about-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-left wow fadeInLeft"
              data-wow-delay=".25s"
              style={{
                visibility: "visible",
                animationDelay: "0.25s",
                animationName: "fadeInLeft",
              }}
            >
              <div className="about-img">
                <img src="assets/img/about/01.png" alt="" />
              </div>
              <div className="about-experience">
                <div className="about-experience-icon">
                  <i className="flaticon-car" />
                </div>
                <b>
                  30 Years Of <br /> Quality Service
                </b>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-right wow fadeInRight"
              data-wow-delay=".25s"
              style={{
                visibility: "visible",
                animationDelay: "0.25s",
                animationName: "fadeInRight",
              }}
            >
              <div className="site-heading mb-3">
                <span className="site-title-tagline justify-content-start">
                  <i className="flaticon-drive" /> About Us
                </span>
                <h2 className="site-title">
                  World Largest <span>Car Dealer</span> Marketplace.
                </h2>
              </div>
              <p className="about-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  <li>At vero eos et accusamus et iusto odio.</li>
                  <li>Established fact that a reader will be distracted.</li>
                  <li>Sed ut perspiciatis unde omnis iste natus sit.</li>
                </ul>
              </div>
              <a href="about.html" className="theme-btn mt-4">
                Discover More
                <i className="fas fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
