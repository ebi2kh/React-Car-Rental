import React from "react";

export const Counter = () => {
  return (
    <div class="counter-area pt-30 pb-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="counter-box">
              <div class="icon">
                <i class="flaticon-car-rental"></i>
              </div>
              <div>
                <span
                  class="counter"
                  data-count="+"
                  data-to="500"
                  data-speed="3000"
                >
                  500
                </span>
                <h6 class="title">+ Available Cars </h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="counter-box">
              <div class="icon">
                <i class="flaticon-car-key"></i>
              </div>
              <div>
                <span
                  class="counter"
                  data-count="+"
                  data-to="900"
                  data-speed="3000"
                >
                  900
                </span>
                <h6 class="title">+ Happy Clients</h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="counter-box">
              <div class="icon">
                <i class="flaticon-screwdriver"></i>
              </div>
              <div>
                <span
                  class="counter"
                  data-count="+"
                  data-to="1500"
                  data-speed="3000"
                >
                  1500
                </span>
                <h6 class="title">+ Team Workers</h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="counter-box">
              <div class="icon">
                <i class="flaticon-review"></i>
              </div>
              <div>
                <span
                  class="counter"
                  data-count="+"
                  data-to="30"
                  data-speed="3000"
                >
                  30
                </span>
                <h6 class="title">+ Years Of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
