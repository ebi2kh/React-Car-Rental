import React from "react";

export const Counter = () => {
  return (
    <div class="counter-area pt-30 pb-30" style={{ background: "#0c1961" }}>
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
                  30
                </span>
                <h6 class="title">+ ماشین‌های موجود </h6>
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
                <h6 class="title">+ مشتریان</h6>
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
                  400
                </span>
                <h6 class="title">+ کارمندان</h6>
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
                  7
                </span>
                <h6 class="title">+ سال تخصص</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
