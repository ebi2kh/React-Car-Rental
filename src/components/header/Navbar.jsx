import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.svg";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="nav-link" href="index.html">
              <img src={logo} alt="logo" style={{ fontSize: "20px" }} />
            </a>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav" style={{ margin: "0 70px" }}>
                <li className="nav-item dropdown" style={{ margin: "0 10px" }}>
                  <Link
                    to={"/"}
                    className="nav-link active"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    خانه
                  </Link>
                </li>
                <li className="nav-item" style={{ margin: "0 10px" }}>
                  <Link className="nav-link" to={"about"}>
                    درباره
                  </Link>
                </li>

                <li className="nav-item" style={{ margin: "0 10px" }}>
                  <Link className="nav-link" to={"contact"}>
                    تماس با ما
                  </Link>
                </li>
                <li className="nav-item" style={{ margin: "0 20px" }}>
                  <Link className="nav-link" to={"faq"}>
                    سوالات متداول
                  </Link>
                </li>
              </ul>
              <div className="nav-right">
                <div className="search-btn">
                  <button type="button" className="nav-right-link">
                    <i className="far fa-search" />
                  </button>
                </div>
                <div className="cart-btn">
                  <a href="#" className="nav-right-link">
                    <i className="far fa-cart-plus" />
                    <span>0</span>
                  </a>
                </div>

                <div className="sidebar-btn">
                  <button type="button" className="nav-right-link">
                    <i className="far fa-bars-sort" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-menu-right">
              <div className="search-btn">
                <button type="button" className="nav-right-link">
                  <i className="far fa-search" />
                </button>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-mobile-icon">
                  <i className="far fa-bars" />
                </span>
              </button>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="footer-social">
                <li style={{ fontSize: "30px" }}>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li style={{ fontSize: "30px" }}>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li style={{ fontSize: "30px" }}>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li style={{ fontSize: "30px" }}>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
