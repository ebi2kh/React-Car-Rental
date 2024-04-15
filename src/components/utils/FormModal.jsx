import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCars } from "../../context/CarContext";
export const FormModal = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationText, setSelectedLocationText] =
    useState("انتخاب کنید");
  const { cars, filterCars, filteredCars } = useCars();
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLocation2Open, setIsLocation2Open] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div style={{ maxHeight: "600px", width: "90vh", overflowY: "auto" }}>
      <div className="user-profile-wrapper">
        <div className="user-profile-card">
          <h4 className="user-profile-card-title">رزرو خودرو</h4>
          <div className="col-lg-12">
            <div className="add-listing-form">
              <h6 className="mb-1">اطلاعات شخصی</h6>
              <form action="#">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>نام</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="نام خود را وارد کنید"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>نام خانوادگی</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="نام خانوادگی خود را وارد کنید"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>کد ملی</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="کد ملی خود را وارد کنید"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="form-group">
                      <label>محل تحویل</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value={1}>انتخاب کنید</option>
                        {[...new Set(cars.map((car) => car.Location))].map(
                          (location, index) => (
                            <option key={index} value={index + 2}>
                              {location}
                            </option>
                          )
                        )}
                      </select>

                      <div
                        className={`nice-select select ${
                          isLocationOpen ? "open" : ""
                        }`}
                        tabIndex={0}
                        onClick={() => setIsLocationOpen(!isLocationOpen)}
                      >
                        <span className="current">{selectedLocationText}</span>
                        <ul className="list">
                          <li data-value={1} className="option selected">
                            انتخاب کنید
                          </li>
                          {[...new Set(cars.map((car) => car.Location))].map(
                            (location, index) => (
                              <li
                                key={index}
                                data-value={index + 2}
                                className="option"
                                onClick={() => {
                                  setSelectedLocation(location);
                                  setSelectedLocationText(location);
                                }}
                              >
                                {location}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="form-group">
                      <label>محل بازگشت</label>
                      <select className="select" style={{ display: "none" }}>
                        <option value={1}>انتخاب کنید</option>
                        {[...new Set(cars.map((car) => car.Location))].map(
                          (location, index) => (
                            <option key={index} value={index + 2}>
                              {location}
                            </option>
                          )
                        )}
                      </select>

                      <div
                        className={`nice-select select ${
                          isLocation2Open ? "open" : ""
                        }`}
                        tabIndex={0}
                        onClick={() => setIsLocation2Open(!isLocation2Open)}
                      >
                        <span className="current">انتخاب کنید</span>
                        <ul className="list">
                          <li data-value={1} className="option selected">
                            انتخاب کنید
                          </li>
                          {[...new Set(cars.map((car) => car.Location))].map(
                            (location, index) => (
                              <li
                                key={index}
                                data-value={index + 2}
                                className="option"
                              >
                                {location}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label>تاریخ تحویل</label>
                      <div className="nice-select select open" tabIndex={0}>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="dd/MM/yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label>تاریخ بازگشت</label>
                      <div className="nice-select select open" tabIndex={0}>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="dd/MM/yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="fw-bold mt-4 mb-1"> اطلاعات تماس و آدرس</h6>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>ایمیل</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ایمیل خود را وارد کنید"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>تلفن</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="تلفن خود را وارد کنید"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>استان</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="استان خود را وارد کنید"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>شهر</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="شهر خود را وارد کنید"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>کد پستی</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="کد پستی را وارد کنید"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>آدرس کامل</label>
                      <textarea
                        className="form-control"
                        placeholder="آدرس"
                        cols={20}
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="agree"
                        type="checkbox"
                        defaultValue=""
                        id="agree"
                      />
                      <label className="form-check-label" htmlFor="agree">
                        من با شرایط خدمات و سیاست حفظ حریم خصوصی شما موافقم.
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 my-4">
                    <button type="submit" className="theme-btn">
                      <span className="far fa-save" /> رزرو خودرو
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
