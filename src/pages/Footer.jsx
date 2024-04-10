import React from "react";

export const Footer = () => {
  return (
    <footer className="footer clearfix">
      <div className="container">
        {/* first footer */}
        <div className="first-footer">
          <div className="row">
            <div className="col-md-12">
              <div className="links dark footer-contact-links">
                <div className="footer-contact-links-wrapper">
                  <div className="footer-contact-link-wrapper">
                    <div className="image-wrapper footer-contact-link-icon">
                      <div className="icon-footer">
                        {" "}
                        <i className="flaticon-phone-call" />{" "}
                      </div>
                    </div>
                    <div className="footer-contact-link-content">
                      <h6>Call us</h6>
                      <p>+971 52-333-4444</p>
                    </div>
                  </div>
                  <div className="footer-contact-links-divider" />
                  <div className="footer-contact-link-wrapper">
                    <div className="image-wrapper footer-contact-link-icon">
                      <div className="icon-footer">
                        {" "}
                        <i className="omfi-envelope" />{" "}
                      </div>
                    </div>
                    <div className="footer-contact-link-content">
                      <h6>Write to us</h6>
                      <p>info@renax.com</p>
                    </div>
                  </div>
                  <div className="footer-contact-links-divider" />
                  <div className="footer-contact-link-wrapper">
                    <div className="image-wrapper footer-contact-link-icon">
                      <div className="icon-footer">
                        {" "}
                        <i className="omfi-location" />{" "}
                      </div>
                    </div>
                    <div className="footer-contact-link-content">
                      <h6>Address</h6>
                      <p>Dubai, Water Tower, Office 123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second footer */}
        <div className="second-footer">
          <div className="row">
            {/* about & social icons */}
            <div className="col-md-4 widget-area">
              <div className="widget clearfix">
                <div className="footer-logo">
                  <img src="img/logo-light.png" alt="" />
                </div>
                {/* <div class="footer-logo"><h2>CARE<span>X</span></h2></div> */}
                <div className="widget-text">
                  <p>
                    Rent a car imperdiet sapien porttito the bibenum ellentesue
                    the commodo erat nesuen.
                  </p>
                  <div className="social-icons">
                    <ul className="list-inline">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* quick links */}
            <div className="col-md-3 offset-md-1 widget-area">
              <div className="widget clearfix usful-links">
                <h3 className="widget-title">Quick Links</h3>
                <ul>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="cars.html">Cars</a>
                  </li>
                  <li>
                    <a href="car-types.html">Car Types</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* subscribe */}
            <div className="col-md-4 widget-area">
              <div className="widget clearfix">
                <h3 className="widget-title">Subscribe</h3>
                <p>
                  Want to be notified about our services. Just sign up and we'll
                  send you a notification by email.
                </p>
                <div className="widget-newsletter">
                  <form action="#">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <button type="submit">
                      <i className="ti-arrow-top-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom footer */}
        <div className="bottom-footer-text">
          <div className="row copyright">
            <div className="col-md-12">
              <p className="mb-0">
                ©2024 <a href="#">DuruThemes</a>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
