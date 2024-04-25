import React from "react";
import { useParams } from "react-router-dom";
import { useCars } from "../../context/CarContext";
import { RelatedCar } from "./RelatedCar";
import TransitionsModal from "../utils/TransitionsModal";
export const CarSingle = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const { cars } = useCars();
  console.log(cars);
  const car = cars.find((p) => p.id === parseInt(id));
  console.log(car);
  return (
    <div className="car-item-single bg py-120">
      <div className="container">
        <div className="car-single-wrapper">
          <div className="row">
            <div className="col-lg-8">
              <div className="car-single-details">
                <div className="car-single-widget">
                  <div className="car-single-top">
                    <span className="car-status status-1">جدید</span>
                    <h3 className="car-single-title">
                      {car.Make + " " + car.Model}
                    </h3>
                    <ul className="car-single-meta">
                      <li>
                        <i className="far fa-clock" /> تاریخ: Sat, Jan 25, 2023
                      </li>
                      <li>
                        <i className="far fa-eye" /> بازدید: 850
                      </li>
                    </ul>
                  </div>
                  <div className="car-single-slider">
                    <div className="item-gallery">
                      <div className="flexslider-thumbnails">
                        <ol className="flex-control-nav flex-control-thumbs">
                          <li>
                            <img src={car.image} className="flex-active" />
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="car-single-widget text-center">
                  <h4 className="car-single-price">تومان/ساعت {car.Rental}</h4>
                  <ul className="car-single-meta">
                    <li>
                      <i className="fa-regular fa-gauge-high" /> 50k حداکثر
                      کیلومتر درروز
                    </li>
                    <li>
                      <i className="far fa-location-dot" /> {car.Location}
                    </li>
                  </ul>
                </div>
                <div className="car-single-widget">
                  <h4 className="mb-4">اطلاعات اصلی</h4>
                  <div className="car-key-info">
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>نوع</span>
                            <h6>اقتصادی</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>وضعیت</span>
                            <h6>مدل جدید</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-speedometer" />
                          </div>
                          <div className="car-key-content">
                            <span>کارمرد</span>
                            <h6>50,000 (KM)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-settings" />
                          </div>
                          <div className="car-key-content">
                            <span>دنده</span>
                            <h6>{car.Transmission}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>سال</span>
                            <h6>{car.Year}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-gas-station" />
                          </div>
                          <div className="car-key-content">
                            <span>نوع سوخت</span>
                            <h6>{car.Fuel}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>رنگ</span>
                            <h6>{car.Color}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>تعداد درها</span>
                            <h6>4</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="car-key-item">
                          <div className="car-key-icon">
                            <i className="flaticon-drive" />
                          </div>
                          <div className="car-key-content">
                            <span>تعداد صندلی</span>
                            <h6>{car.Seat}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="car-single-widget">
                  <div className="car-single-overview">
                    <h4 className="mb-3">توصیف</h4>
                    <div className="mb-4">
                      <p>
                        در اینجا، ما بهترین خدمات اجاره خودرو را ارائه می دهیم.
                        با ما، شما می توانید از خودروهای با کیفیت بالا با قیمت
                        مناسب لذت ببرید. ما افتخار می کنیم که بهترین و مدرن ترین
                        خودروها را در اختیار شما قرار می دهیم. همه خودروهای ما
                        توسط مکانیک های مجرب تعمیر و نگهداری می شوند.
                      </p>
                      <p className="mt-2">
                        ما می دانیم که انتخاب خودروی مناسب برای اجاره می تواند
                        چالش برانگیز باشد. برای همین، ما در اینجا هستیم تا به
                        شما کمک کنیم. با توجه به نیازها و ترجیحات شما، ما می
                        توانیم بهترین خودرو را برای شما پیشنهاد دهیم. از
                        خودروهای کوچک و اقتصادی گرفته تا خودروهای لوکس و بزرگ،
                        ما همه چیز را داریم.
                      </p>
                    </div>
                    <h4 className="mb-3">ویژگی های دیگر خودرو</h4>
                    <div className="row mb-3">
                      <div className="col-lg-4">
                        <ul className="car-single-list">
                          <li>
                            <i className="far fa-check-circle" /> کولر
                          </li>

                          <li>
                            <i className="far fa-check-circle" /> سیستم مسیریابی
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> صندلی چرم
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul className="car-single-list">
                          <li>
                            <i className="far fa-check-circle" /> Premium sound
                            system
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> بلوتوث
                          </li>
                          <li>
                            <i className="far fa-check-circle" /> اندروید
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      to={"#"}
                      className="theme-btn"
                      style={{
                        width: "100%",
                        margin: "0 20px",
                        background: "var(--bs-code-color)",
                        color: "black",
                      }}
                    >
                      <TransitionsModal title="سفارش " />
                    </a>
                    {/* <h4 className="mb-4">لوکیشن</h4>
                    <div className="car-single-map">
                      <div className="contact-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* <div className="car-single-related mt-5"> */}
              <h3 className="mb-30">خودرو های مرتبط</h3>
              <RelatedCar />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
