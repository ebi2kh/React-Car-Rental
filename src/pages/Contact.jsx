import React from "react";

const Contact = () => {
  return (
    <>
      <main className="main">
        <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Contact Us</h2>
            <ul className="breadcrumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="contact-area py-120">
          <div className="container">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fal fa-map-location-dot" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Office Address</h5>
                      <p>25/B Milford, New York, USA</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fal fa-phone-volume" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Call Us</h5>
                      <p>+2 123 4565 789</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fal fa-envelopes" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Email Us</h5>
                      <p>
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="a6cfc8c0c9e6c3dec7cbd6cac388c5c9cb"
                        >
                          [email&nbsp;protected]
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fal fa-alarm-clock" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Open Time</h5>
                      <p>Mon - Sat (10.00AM - 05.30PM)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-wrapper">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="contact-img">
                    <img src="assets/img/contact/01.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="contact-form">
                    <div className="contact-form-header">
                      <h2>Get In Touch</h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page randomised
                        words which don't look even slightly when looking at its
                        layout.{" "}
                      </p>
                    </div>
                    <form
                      method="post"
                      action="/motex/assets/php/contact.php"
                      id="contact-form"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Your Email"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Your Subject"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          cols={30}
                          rows={5}
                          className="form-control"
                          placeholder="Write Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="theme-btn">
                        Send Message <i className="far fa-paper-plane" />
                      </button>
                      <div className="col-md-12 mt-3">
                        <div className="form-messege text-success" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </main>
    </>
  );
};

export default Contact;