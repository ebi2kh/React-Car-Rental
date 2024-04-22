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

  // Simple validation for the input field to ensure it is not empty and has at least 3 characters
  // const [form, setForm] = useState({
  //   نام: "",
  //   نام_خانوادگی: "",
  //   کد_ملی: "",
  //   محل_تحویل: "",
  // });

  // const handleInputChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const validateForm = () => {
  //   let isValid = true;
  //   let errors = {};

  //   if (!form.name || form.نام.length < 3) {
  //     isValid = false;
  //     errors["نام"] = "نام should be at least 3 characters long";
  //   }

  //   if (!form.نام_خانوادگی || form.نام_خانوادگی.length < 3) {
  //     isValid = false;
  //     errors["نام_خانوادگی"] =
  //       "نام خانوادگی should be at least 3 characters long";
  //   }

  //   if (!form.کد_ملی || isNaN(form.کد_ملی)) {
  //     isValid = false;
  //     errors["کد_ملی"] = "کد ملی should be a number";
  //   }

  //   if (!form.محل_تحویل || form.محل_تحویل === "انتخاب کنید") {
  //     isValid = false;
  //     errors["محل_تحویل"] = "You must select a محل تحویل";
  //   }

  //   if (!isValid) {
  //     console.log(errors);
  //   }

  //   return isValid;
  // };

  const [formErrors, setFormErrors] = useState({});
  const [form, setForm] = useState({
    نام: "",
    نام_خانوادگی: "",
    کد_ملی: "",
    ایمیل: "",

    // Add other form fields as needed
  });
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Name validation
    if (!form.نام.trim()) {
      errors.نام = "نام نمی‌تواند خالی باشد";
      formIsValid = false;
    } else if (form.نام.length < 3) {
      errors.نام = "نام باید حداقل 3 کاراکتر باشد";
      formIsValid = false;
    }

    // Family Name validation
    if (!form.نام_خانوادگی.trim()) {
      errors.نام_خانوادگی = "نام خانوادگی نمی‌تواند خالی باشد";
      formIsValid = false;
    } else if (form.نام_خانوادگی.length < 3) {
      errors.نام_خانوادگی = "نام خانوادگی باید حداقل 3 کاراکتر باشد";
      formIsValid = false;
    }

    // Inside your validateForm function
    if (!form.کد_ملی) {
      errors.کد_ملی = "کد ملی نمی‌تواند خالی باشد";
      formIsValid = false;
    } else if (form.کد_ملی.length < 8 || form.کد_ملی.length > 10) {
      // Adjust length check as needed
      errors.کد_ملی = "کد ملی باید بین 8 تا 10 رقم باشد";
      formIsValid = false;
    }

    // Email validation (simple pattern)
    if (form.ایمیل) {
      let lastAtPos = form.ایمیل.lastIndexOf("@");
      let lastDotPos = form.ایمیل.lastIndexOf(".");
      if (!form.ایمیل) {
        errors.ایمیل = "ایمیل نمی‌تواند خالی باشد";
      }
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          form.ایمیل.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          form.ایمیل.length - lastDotPos > 2
        )
      ) {
        errors.ایمیل = "ایمیل نامعتبر است";
        formIsValid = false;
      }
    }

    // Update the state with errors
    setFormErrors(errors);
    console.log(formErrors);
    return formIsValid;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // ////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission or further processing
      console.log("Form is valid");
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div style={{ maxHeight: "600px", width: "90vh", overflowY: "auto" }}>
      <div className="user-profile-wrapper">
        <div className="user-profile-card">
          <h4 className="user-profile-card-title">رزرو خودرو</h4>
          <div className="col-lg-12">
            <div className="add-listing-form">
              <h6 className="mb-1">اطلاعات شخصی</h6>
              <form onSubmit={handleSubmit}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>نام</label>
                      <input
                        name="نام"
                        type="text"
                        className="form-control"
                        placeholder="نام خود را وارد کنید"
                        value={form.نام}
                        onChange={handleInputChange}
                      />
                      {formErrors.نام && <div>{formErrors.نام} </div>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>نام خانوادگی</label>
                      <input
                        name="نام_خانوادگی"
                        type="text"
                        className="form-control"
                        placeholder="نام خانوادگی خود را وارد کنید"
                        value={form.نام_خانوادگی}
                        onChange={handleInputChange}
                      />
                      {formErrors.نام_خانوادگی && (
                        <div>{formErrors.نام_خانوادگی}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>کد ملی</label>
                      <input
                        name="کد_ملی"
                        type="text"
                        className="form-control"
                        placeholder="کد ملی خود را وارد کنید"
                        value={form.کد_ملی}
                        onChange={handleInputChange}
                      />
                      {formErrors.کد_ملی && (
                        <div className="text-danger">{formErrors.کد_ملی}</div>
                      )}
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
                        name="محل_تحویل"
                        onClick={() => {
                          setIsLocationOpen(!isLocationOpen);
                          handleInputChange({
                            target: {
                              name: "محل_تحویل",
                              value: selectedLocation,
                            },
                          });
                        }}
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
                        type="email"
                        name="ایمیل"
                        className="form-control"
                        placeholder="ایمیل خود را وارد کنید"
                        value={form.ایمیل}
                        onChange={handleInputChange}
                      />
                      {formErrors.ایمیل && <div>{formErrors.ایمیل}</div>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>تلفن</label>
                      <input
                        type="tel"
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
                        type="number"
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
