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
                  <i className="flaticon-drive" /> چرا ما را انتخاب کنید
                </span>
                <h2 className="site-title text-white mb-10">
                  ما به ارائه خدمات با کیفیت <span>تعهد داریم</span>
                </h2>
                <p className="text-white">
                  ما در اینجا هستیم تا به شما بهترین تجربه اجاره خودرو را بدهیم.
                  با ما، شما می توانید از خودروهای با کیفیت بالا با قیمت مناسب
                  لذت ببرید.
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
                      <h3>بهترین خودروهای </h3>
                      <p>
                        ما افتخار می کنیم که بهترین و مدرن ترین خودروها را در
                        اختیار شما قرار می دهیم. همه خودروهای ما توسط مکانیک های
                        مجرب تعمیر و نگهداری می شوند.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item mb-lg-0">
                    <span className="choose-count">03</span>
                    <div className="choose-item-icon">
                      <i className="flaticon-drive-thru" />
                    </div>
                    <div className="choose-item-info">
                      <h3>برندهای محبوب</h3>
                      <p>
                        ما خودروهایی از برندهای معتبر و محبوب را در اختیار شما
                        قرار می دهیم. از برندهای محلی تا بین المللی، ما همه چیز
                        را داریم.
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
                      <h3>مکانیک های مجاز</h3>
                      <p>
                        تیم ما شامل مکانیک های مجرب و مجاز است که می توانند
                        خودروهای ما را در وضعیت عالی نگه دارند. با ما، شما می
                        توانید با خیال راحت سفر کنید.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item mb-lg-0">
                    <span className="choose-count">04</span>
                    <div className="choose-item-icon">
                      <i className="flaticon-online-payment" />
                    </div>
                    <div className="choose-item-info">
                      <h3>پرداخت آنلاین</h3>
                      <p>
                        ما پرداخت آنلاین را برای راحتی شما فراهم کرده ایم. با
                        چند کلیک ساده، شما می توانید خودروی مورد نظر خود را رزرو
                        کنید.
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
export default Choose;
