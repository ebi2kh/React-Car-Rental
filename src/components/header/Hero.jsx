import React from "react";
import im from "../../assets/img/slider/slider-2.jpg";
import im2 from "../../assets/img/slider/hero-1.png";

export const Hero = () => {
  return (
    <div className="hero-section">
      <div class="hero-single" style={{ background: `url(${im})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="hero-content">
                <h6
                  className="hero-sub-title"
                  data-animation="fadeInUp"
                  data-delay=".25s"
                  style={{ animationDelay: "0.25s" }}
                >
                  خوش آمدید به ریکت خودرو
                </h6>
                <h1
                  className="hero-title animated fadeInRight"
                  data-animation="fadeInRight"
                  data-delay=".50s"
                  style={{ animationDelay: "0.5s" }}
                >
                  Best Way To Find Your <span>Dream</span> Car
                </h1>
                <p
                  data-animation="fadeInLeft"
                  data-delay=".75s"
                  className="animated fadeInLeft"
                  style={{ animationDelay: "0.75s" }}
                >
                  There are many variations of passages orem psum available but
                  the majority have suffered alteration in some form by injected
                  humour.
                </p>
                <div
                  className="hero-btn animated fadeInUp"
                  data-animation="fadeInUp"
                  data-delay="1s"
                  style={{ animationDelay: "1s" }}
                >
                  <a href="#" className="theme-btn">
                    درباره ما
                    <i className="fas fa-arrow-right-long" />
                  </a>
                  <a href="#" className="theme-btn theme-btn2">
                    بیشتر بخوانید
                    <i className="fas fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="hero-right">
                <div className="hero-img">
                  <img
                    src={im2}
                    alt=""
                    data-animation="fadeInRight"
                    data-delay=".25s"
                    className=""
                    style={{ animationDelay: "0.25s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
