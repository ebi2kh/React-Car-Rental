import React from "react";
import im from "../../assets/img/download/01.png";
export const Download = () => {
  return (
    <div className="download-area mb-120">
      <div className="container">
        <div className="download-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="download-content">
                <div className="site-heading mb-4">
                  <span className="site-title-tagline justify-content-start">
                    <i className="flaticon-drive" /> دریافت برنامه ما
                  </span>
                  <h2 className="site-title mb-10">
                    برنامه <span>ریکت خودرو</span> را به صورت رایگان دانلود کنید
                  </h2>
                  <p>
                    برنامه موتکس ما را دانلود کنید و از اجاره خودروی مورد علاقه
                    خود لذت ببرید. با استفاده از برنامه ما، شما می توانید به
                    راحتی خودروی مورد نظر خود را پیدا کنید و آن را رزرو کنید.
                  </p>
                </div>
                <div className="download-btn">
                  <a href="#">
                    <i className="fab fa-google-play" />
                    <div className="download-btn-content">
                      <span>دریافت از</span>
                      <strong>گوگل پلی</strong>
                    </div>
                  </a>
                  <a href="#">
                    <i className="fab fa-app-store" />
                    <div className="download-btn-content">
                      <span>دریافت از</span>
                      <strong>آپ استور</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="download-img">
            <img src={im} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Download;
