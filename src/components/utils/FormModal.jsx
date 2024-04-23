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

  const [formErrors, setFormErrors] = useState({});
  const [form, setForm] = useState({
    نام: "",
    نام_خانوادگی: "",
    کد_ملی: "",
    ایمیل: "",
    تلفن: "",
    استان: "",
    شهر: "",
    کد_پستی: "",
    آدرس_کامل: "",
    agree: false,
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
    // Inside your validateForm function
    if (!form.ایمیل) {
      errors.ایمیل = "ایمیل نمی‌تواند خالی باشد";
      formIsValid = false;
    } else {
      let lastAtPos = form.ایمیل.lastIndexOf("@");
      let lastDotPos = form.ایمیل.lastIndexOf(".");
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

    if (!form.محل_تحویل || form.محل_تحویل === "") {
      errors.محل_تحویل = "محل تحویل باید انتخاب شود"; // Delivery place must be selected
      formIsValid = false;
    }

    if (!form.محل_بازگشت || form.محل_بازگشت === "") {
      errors.محل_بازگشت = "محل بازگشت باید انتخاب شود"; // Return place must be selected
      formIsValid = false;
    }

    if (!form.تلفن.trim()) {
      errors.تلفن = "تلفن نمی‌تواند خالی باشد";
      formIsValid = false;
    }

    if (!form.استان.trim()) {
      errors.استان = "استان نمی‌تواند خالی باشد";
      formIsValid = false;
    }

    if (!form.شهر.trim()) {
      errors.شهر = "شهر نمی‌تواند خالی باشد";
      formIsValid = false;
    }

    if (!form.کد_پستی.trim()) {
      errors.کد_پستی = "کد پستی نمی‌تواند خالی باشد";
      formIsValid = false;
    }

    if (!form.آدرس_کامل.trim()) {
      errors.آدرس_کامل = "آدرس کامل نمی‌تواند خالی باشد";
      formIsValid = false;
    }

    if (!form.agree) {
      errors.agree =
        "شما باید با شرایط خدمات و سیاست حفظ حریم خصوصی موافقت کنید";
      formIsValid = false;
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
                      {formErrors.نام && (
                        <div className="text-danger">{formErrors.نام} </div>
                      )}
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
                        <div className="text-danger">
                          {formErrors.نام_خانوادگی}
                        </div>
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
                      <select
                        name="محل_تحویل"
                        className="nice-select select center"
                        value={form.محل_تحویل}
                        onChange={handleInputChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="option1">تهران</option>
                        <option value="option2">شیراز</option>
                        <option value="option3">اصفهان</option>
                      </select>
                      {formErrors.محل_تحویل && (
                        <div className="text-danger">
                          {formErrors.محل_تحویل}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="form-group">
                      <label>محل بازگشت</label>
                      <select
                        name="محل_بازگشت"
                        className="nice-select select center"
                        value={form.محل_بازگشت}
                        onChange={handleInputChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="option1">تهران</option>
                        <option value="option2">شیراز</option>
                        <option value="option3">اصفهان</option>
                      </select>
                      {formErrors.محل_بازگشت && (
                        <div className="text-danger">
                          {formErrors.محل_بازگشت}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="form-group">
                      <label>تاریخ تحویل</label>

                      <DatePicker
                        className="nice-select select open"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label>تاریخ بازگشت</label>

                      <DatePicker
                        className="nice-select select open"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                      />
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
                      {formErrors.ایمیل && (
                        <div className="text-danger">{formErrors.ایمیل}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>تلفن</label>
                      <input
                        name="تلفن"
                        type="tel"
                        className="form-control"
                        placeholder="تلفن خود را وارد کنید"
                        value={form.تلفن}
                        onChange={handleInputChange}
                      />
                      {formErrors.تلفن && (
                        <div className="text-danger">{formErrors.تلفن}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>استان</label>
                      <input
                        name="استان"
                        type="text"
                        className="form-control"
                        placeholder="استان خود را وارد کنید"
                        value={form.استان}
                        onChange={handleInputChange}
                      />
                      {formErrors.استان && (
                        <div className="text-danger">{formErrors.استان}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>شهر</label>
                      <input
                        type="text"
                        name="شهر"
                        className="form-control"
                        value={form.شهر}
                        onChange={handleInputChange}
                        placeholder="شهر خود را وارد کنید"
                      />
                      {formErrors.شهر && (
                        <div className="text-danger">{formErrors.شهر}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>کد پستی</label>
                      <input
                        name="کد_پستی"
                        value={form.کد_پستی}
                        onChange={handleInputChange}
                        type="number"
                        className="form-control"
                        placeholder="کد پستی را وارد کنید"
                      />
                      {formErrors.کد_پستی && (
                        <div className="text-danger">{formErrors.کد_پستی}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>آدرس کامل</label>
                      <textarea
                        name="آدرس_کامل"
                        value={form.آدرس_کامل}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="آدرس"
                        cols={20}
                        rows={5}
                        defaultValue={""}
                      />
                      {formErrors.آدرس_کامل && (
                        <div className="text-danger">
                          {formErrors.آدرس_کامل}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <div className="form-check">
                      <input
                        name="agree"
                        className="form-check-input"
                        type="checkbox"
                        id="agree"
                        checked={form.agree}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="agree">
                        من با شرایط خدمات و سیاست حفظ حریم خصوصی شما موافقم.
                      </label>
                      {formErrors.agree && (
                        <div className="text-danger">{formErrors.agree}</div>
                      )}
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
