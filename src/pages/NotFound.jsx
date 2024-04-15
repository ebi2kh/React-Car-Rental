import React from "react";

const NotFound = () => {
  return (
    <main className="main">
      <div
        className="site-breadcrumb"
        style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">404 Error</h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">404 Error</li>
          </ul>
        </div>
      </div>
      <div className="error-area py-120">
        <div className="container">
          <div className="col-md-8 mx-auto">
            <div className="error-wrapper">
              <div className="error-img">
                <img src="assets/img/error/404.png" alt="" />
              </div>
              <h2>Opos... Page Not Found!</h2>
              <p>
                The page you looking for not found may be it not exist or
                removed.
              </p>
              <a href="index.html" className="theme-btn">
                Go Back Home <i className="far fa-home" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
