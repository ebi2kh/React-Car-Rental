import React from "react";
import im from "../../assets/img/about/01.png";
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
                <img src={im} alt="" />
              </div>
              <div className="about-experience">
                <div className="about-experience-icon">
                  <i className="flaticon-car" />
                </div>
                <b>
                  30 سال از <br /> خدمات با کیفیت
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
                  <i className="flaticon-drive" /> درباره ما
                </span>
                <h2 className="site-title">
                  بزرگترین سایت <span> کرایه خودرو</span>
                </h2>
              </div>
              <p className="about-text">
                از میان مجموعه گسترده ای از خودروهای کیفیت بالا انتخاب کنید. ما
                در اینجا هستیم تا سفر شما را آسان و خاطره انگیز کنیم.
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  <li>
                    ما به طور کامل به حقوق و احترام به مشتریان خود پایبند هستیم.
                  </li>
                  <li>
                    یک حقیقت مستحکم شده است که خواننده توسط محتوای قابل خواندن
                    از صفحه منحرف می شود.
                  </li>
                  <li>
                    ما تحت تأثیر هیچ چیزی نیستیم، ما فقط به بهترین خدمات متعهد
                    هستیم.
                  </li>
                </ul>
              </div>
              <a href="about.html" className="theme-btn mt-4">
                بیشتر بخوانید
                <i className="fas fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
