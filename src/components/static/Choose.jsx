import React from "react";

export const Choose = () => {
  return (
    <div className="choose-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-content">
              <div
                className="site-heading wow fadeInDown"
                data-wow-delay=".25s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.25s",
                  animationName: "fadeInDown",
                }}
              >
                <span className="site-title-tagline text-white justify-content-start">
                  <i className="flaticon-drive" /> Why Choose Us
                </span>
                <h2 className="site-title text-white mb-10">
                  We are dedicated <span>to provide</span> quality service
                </h2>
                <p className="text-white">
                  There are many variations of passages available but the
                  majority have suffered alteration in some form going to use a
                  passage by injected humour randomised words which don't look
                  even slightly believable.
                </p>
              </div>
              <div
                className="choose-img wow fadeInUp"
                data-wow-delay=".25s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.25s",
                  animationName: "fadeInUp",
                }}
              >
                <img src="assets/img/choose/01.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="choose-content-wrapper wow fadeInRight"
              data-wow-delay=".25s"
              style={{
                visibility: "visible",
                animationDelay: "0.25s",
                animationName: "fadeInRight",
              }}
            >
              <div className="row">
                <div className="col-md-6 col-lg-6 mt-lg-5">
                  <div className="choose-item">
                    <span className="choose-count">01</span>
                    <div className="choose-item-icon">
                      <i className="flaticon-car" />
                    </div>
                    <div className="choose-item-info">
                      <h3>Best Quality Cars</h3>
                      <p>
                        There are many variations of the passages available but
                        the majo have suffered fact that reader will be dist
                        alteration.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item mb-lg-0">
                    <span className="choose-count">03</span>
                    <div className="choose-item-icon">
                      <i className="flaticon-drive-thru" />
                    </div>
                    <div className="choose-item-info">
                      <h3>Popular Brands</h3>
                      <p>
                        There are many variations of the passages available but
                        the majo have suffered fact that reader will be dist
                        alteration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="choose-item">
                    <span className="choose-count">02</span>
                    <div className="choose-item-icon">
                      <i className="flaticon-chauffeur" />
                    </div>
                    <div className="choose-item-info">
                      <h3>Certified Mechanics</h3>
                      <p>
                        There are many variations of the passages available but
                        the majo have suffered fact that reader will be dist
                        alteration.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item mb-lg-0">
                    <span className="choose-count">04</span>
                    <div className="choose-item-icon">
                      <i className="flaticon-online-payment" />
                    </div>
                    <div className="choose-item-info">
                      <h3>Reasonable Price</h3>
                      <p>
                        There are many variations of the passages available but
                        the majo have suffered fact that reader will be dist
                        alteration.
                      </p>
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
