import React from "react";

export const Faq = () => {
  return (
    <div className="faq-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline justify-content-start">
                  سوالات متداول
                </span>
                <h2 className="site-title my-3">
                  سوالات <span>متداول</span> عمومی
                </h2>
              </div>
              <p className="about-text">
                در این بخش، ما به سوالات متداول در مورد خدمات ما پاسخ می دهیم.
                اگر سوالی دارید که در اینجا پاسخ داده نشده است، لطفا با ما تماس
                بگیرید.
              </p>
              <div className="faq-img mt-3">
                <img src="assets/img/faq/01.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span>
                      <i className="far fa-question" />
                    </span>{" "}
                    خرید خودرو چقدر طول می کشد؟
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    مدت زمان خرید خودرو بستگی به چندین عامل دارد، از جمله نوع
                    خودرو، موجودیت، و شرایط مالی شما. در معمول، فرآیند خرید
                    خودرو می تواند از چند روز تا چند هفته طول بکشد.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <i className="far fa-question" />
                    </span>{" "}
                    چگونه می توانم عضو شوم؟
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    برای عضویت در سایت ما، ابتدا باید روی دکمه "ثبت نام" کلیک
                    کنید. سپس، فرم ثبت نام را با اطلاعات خود پر کنید و روی دکمه
                    "ثبت نام" کلیک کنید. پس از ثبت نام، شما می توانید از تمامی
                    خدمات ما استفاده کنید.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span>
                      <i className="far fa-question" />
                    </span>{" "}
                    چه درگاه پرداختی پشتیبانی می کنید؟
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    ما از درگاه پرداخت های معتبری مانند PayPal، Stripe و Visa
                    پشتیبانی می کنیم. شما می توانید با اطمینان از خدمات ما
                    استفاده کنید.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span>
                      <i className="far fa-question" />
                    </span>{" "}
                    چگونه می توانم درخواست خود را لغو کنم؟
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    برای لغو درخواست، شما باید وارد حساب کاربری خود شوید و به
                    بخش "درخواست ها" بروید. سپس، روی درخواستی که می خواهید لغو
                    کنید کلیک کنید و روی دکمه "لغو" کلیک کنید.
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
export default Faq;
