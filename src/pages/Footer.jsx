import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-widget">
        <div className="container">
          <div className="row footer-widget-wrapper pt-100 pb-70">
            <div className="col-md-6 col-lg-4">
              <div className="footer-widget-box about-us">
                <a href="#" className="footer-logo">
                  <img src="assets/img/logo/logo-light.png" alt="" />
                </a>
                <p className="mb-3">
                  ما در اینجا هستیم تا به شما بهترین تجربه اجاره خودرو را بدهیم.
                  با ما، شما می توانید از خودروهای با کیفیت بالا با قیمت مناسب
                  لذت ببرید.
                </p>
                <ul className="footer-contact">
                  <li>
                    <a href="tel:+21236547898">
                      <i className="far fa-phone" />
                      +2 123 654 7898
                    </a>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt" />
                    تهران ولیعصر
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">لینک های سریع</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> درباره ما
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> آخرین اخبار
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> نظرات
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> شرایط خدمات
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> سیاست حفظ حریم خصوصی
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> فروشندگان ما
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">مرکز پشتیبانی</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> سوالات متداول
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> همکاران
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> نکات رزرو
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> فروش خودروها
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> تماس با ما
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> نقشه سایت
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">خبرنامه</h4>
                <div className="footer-newsletter">
                  <p>
                    برای دریافت آخرین به روزرسانی ها و اخبار، خبرنامه ما را
                    مشترک شوید
                  </p>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="ایمیل شما"
                      />
                      <button className="theme-btn" type="submit">
                        اکنون مشترک شوید <i className="far fa-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p className="copyright-text">
                © Copyright <span id="date">2024</span>{" "}
                <a href="#"> ریکت خودرو </a> تمام حقوق محفوظ است.
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
