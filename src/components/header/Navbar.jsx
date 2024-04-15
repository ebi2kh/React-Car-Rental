import React from "react";
import logo from "../../assets/img/logo/logo.svg";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="navbar-brand" href="index.html">
              {/* <img src={logo} alt="logo" /> */}
            </a>
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
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
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
          </div>
        </nav>
      </div>
    </header>
  );
};
