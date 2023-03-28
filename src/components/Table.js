import React from "react";

export default function Table() {
  return (
    <div>
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Plus Admin</title>
        {/* plugins:css */}
        <link
          rel="stylesheet"
          href="../../../assets/vendors/mdi/css/materialdesignicons.min.css"
        />
        <link
          rel="stylesheet"
          href="../../../assets/vendors/flag-icon-css/css/flag-icon.min.css"
        />
        <link
          rel="stylesheet"
          href="../../../assets/vendors/css/vendor.bundle.base.css"
        />
        {/* endinject */}
        {/* Plugin css for this page */}
        {/* End plugin css for this page */}
        {/* inject:css */}
        {/* endinject */}
        {/* Layout styles */}
        <link rel="stylesheet" href="../../../assets/css/demo_2/style.css" />
        {/* End layout styles */}
        <link rel="shortcut icon" href="../../../assets/images/favicon.png" />
        <div className="container-scroller">
          {/* partial:../../partials/_horizontal-navbar.html */}
          {/* <div className="horizontal-menu">
            <nav className="navbar top-navbar col-lg-12 col-12 p-0">
              <div className="container">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                  <a
                    className="navbar-brand brand-logo"
                    href="../../index.html"
                  >
                    <img src="../../../assets/images/logo.svg" alt="logo" />
                    <span className="font-12 d-block font-weight-light">
                      Responsive Dashboard{" "}
                    </span>
                  </a>
                  <a
                    className="navbar-brand brand-logo-mini"
                    href="../../index.html"
                  >
                    <img
                      src="../../../assets/images/logo-mini.svg"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                  <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-search d-none d-lg-block">
                      <div className="input-group">
                        <div
                          className="input-group-prepend hover-cursor"
                          id="navbar-search-icon"
                        >
                          <span className="input-group-text" id="search">
                            <i className="mdi mdi-magnify" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="navbar-search-input"
                          placeholder="Search"
                          aria-label="search"
                          aria-describedby="search"
                        />
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                      <a
                        className="nav-link"
                        id="profileDropdown"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="nav-profile-img">
                          <img
                            src="../../../assets/images/faces/face1.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="nav-profile-text">
                          <p className="text-black font-weight-semibold m-0">
                            {" "}
                            Olson jass{" "}
                          </p>
                          <span className="font-13 online-color">
                            online <i className="mdi mdi-chevron-down" />
                          </span>
                        </div>
                      </a>
                      <div
                        className="dropdown-menu navbar-dropdown"
                        aria-labelledby="profileDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-cached me-2 text-success" />{" "}
                          Activity Log{" "}
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-logout me-2 text-primary" />{" "}
                          Signout{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                  <button
                    className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                    type="button"
                    data-toggle="horizontal-menu-toggle"
                  >
                    <span className="mdi mdi-menu" />
                  </button>
                </div>
              </div>
            </nav>
            <nav className="bottom-navbar">
              <div className="container">
                <ul className="nav page-navigation">
                  <li className="nav-item">
                    <a className="nav-link" href="../../index.html">
                      <i className="mdi mdi-compass-outline menu-icon" />
                      <span className="menu-title">Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="mdi mdi-monitor-dashboard menu-icon" />
                      <span className="menu-title">UI Elements</span>
                      <i className="menu-arrow" />
                    </a>
                    <div className="submenu">
                      <ul className="submenu-item">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="../../pages/ui-features/buttons.html"
                          >
                            Buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="../../pages/ui-features/dropdowns.html"
                          >
                            Dropdown
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="../../pages/ui-features/typography.html"
                          >
                            Typography
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/forms/basic_elements.html"
                    >
                      <i className="mdi mdi-clipboard-text menu-icon" />
                      <span className="menu-title">Forms</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../../pages/icons/mdi.html">
                      <i className="mdi mdi-contacts menu-icon" />
                      <span className="menu-title">Icons</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/charts/chartjs.html"
                    >
                      <i className="mdi mdi-chart-bar menu-icon" />
                      <span className="menu-title">Charts</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/tables/basic-table.html"
                    >
                      <i className="mdi mdi-table-large menu-icon" />
                      <span className="menu-title">Tables</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.bootstrapdash.com/demo/plus-free/documentation/documentation.html"
                      className="nav-link"
                      target="_blank"
                    >
                      <i className="mdi mdi-file-document-box menu-icon" />
                      <span className="menu-title">Docs</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link d-flex">
                      <button className="btn btn-sm bg-danger text-white">
                        {" "}
                        Trailing{" "}
                      </button>
                      <div className="nav-item dropdown">
                        <a
                          className="nav-link count-indicator dropdown-toggle text-white font-weight-semibold"
                          id="notificationDropdown"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          {" "}
                          English{" "}
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                          aria-labelledby="notificationDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            <i className="flag-icon flag-icon-bl me-3" /> French{" "}
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            <i className="flag-icon flag-icon-cn me-3" />{" "}
                            Chinese{" "}
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            <i className="flag-icon flag-icon-de me-3" /> German{" "}
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            <i className="flag-icon flag-icon-ru me-3" />
                            Russian{" "}
                          </a>
                        </div>
                      </div>
                      <a className="text-white" href="../../index.html">
                        <i className="mdi mdi-home-circle" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div> */}
          {/* partial */}
          <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="page-header">
                  <h3 className="page-title">Basic Tables</h3>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Tables</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Basic tables{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="row">
                  <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Basic Table</h4>
                        <p className="card-description">
                          {" "}
                          Add class <code>.table</code>
                        </p>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Profile</th>
                                <th>VatNo.</th>
                                <th>Created</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Jacob</td>
                                <td>53275531</td>
                                <td>12 May 2017</td>
                                <td>
                                  <label className="badge badge-danger">
                                    Pending
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Messsy</td>
                                <td>53275532</td>
                                <td>15 May 2017</td>
                                <td>
                                  <label className="badge badge-warning">
                                    In progress
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>John</td>
                                <td>53275533</td>
                                <td>14 May 2017</td>
                                <td>
                                  <label className="badge badge-info">
                                    Fixed
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Peter</td>
                                <td>53275534</td>
                                <td>16 May 2017</td>
                                <td>
                                  <label className="badge badge-success">
                                    Completed
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Dave</td>
                                <td>53275535</td>
                                <td>20 May 2017</td>
                                <td>
                                  <label className="badge badge-warning">
                                    In progress
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Hoverable Table</h4>
                        <p className="card-description">
                          {" "}
                          Add class <code>.table-hover</code>
                        </p>
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>Product</th>
                                <th>Sale</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Jacob</td>
                                <td>Photoshop</td>
                                <td className="text-danger">
                                  {" "}
                                  28.76% <i className="mdi mdi-arrow-down" />
                                </td>
                                <td>
                                  <label className="badge badge-danger">
                                    Pending
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Messsy</td>
                                <td>Flash</td>
                                <td className="text-danger">
                                  {" "}
                                  21.06% <i className="mdi mdi-arrow-down" />
                                </td>
                                <td>
                                  <label className="badge badge-warning">
                                    In progress
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>John</td>
                                <td>Premier</td>
                                <td className="text-danger">
                                  {" "}
                                  35.00% <i className="mdi mdi-arrow-down" />
                                </td>
                                <td>
                                  <label className="badge badge-info">
                                    Fixed
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Peter</td>
                                <td>After effects</td>
                                <td className="text-success">
                                  {" "}
                                  82.00% <i className="mdi mdi-arrow-up" />
                                </td>
                                <td>
                                  <label className="badge badge-success">
                                    Completed
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Dave</td>
                                <td>53275535</td>
                                <td className="text-success">
                                  {" "}
                                  98.05% <i className="mdi mdi-arrow-up" />
                                </td>
                                <td>
                                  <label className="badge badge-warning">
                                    In progress
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Striped Table</h4>
                        <p className="card-description">
                          {" "}
                          Add class <code>.table-striped</code>
                        </p>
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>First name</th>
                                <th>Progress</th>
                                <th>Amount</th>
                                <th>Deadline</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-1">
                                  <img
                                    src="../../../assets/images/faces-clipart/pic-1.png"
                                    alt="image"
                                  />
                                </td>
                                <td>Herman Beck</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 77.99</td>
                                <td>May 15, 2015</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <img
                                    src="../../../assets/images/faces-clipart/pic-2.png"
                                    alt="image"
                                  />
                                </td>
                                <td>Messsy Adam</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-danger"
                                      role="progressbar"
                                      style={{ width: "75%" }}
                                      aria-valuenow={75}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$245.30</td>
                                <td>July 1, 2015</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <img
                                    src="../../../assets/images/faces-clipart/pic-3.png"
                                    alt="image"
                                  />
                                </td>
                                <td>John Richards</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "90%" }}
                                      aria-valuenow={90}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$138.00</td>
                                <td>Apr 12, 2015</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <img
                                    src="../../../assets/images/faces-clipart/pic-4.png"
                                    alt="image"
                                  />
                                </td>
                                <td>Peter Meggik</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-primary"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 77.99</td>
                                <td>May 15, 2015</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <img
                                    src="../../../assets/images/faces-clipart/pic-1.png"
                                    alt="image"
                                  />
                                </td>
                                <td>Edward</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-danger"
                                      role="progressbar"
                                      style={{ width: "35%" }}
                                      aria-valuenow={35}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 160.25</td>
                                <td>May 03, 2015</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <img
                                    src="../../../assets/images/faces-clipart/pic-2.png"
                                    alt="image"
                                  />
                                </td>
                                <td>John Doe</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuenow={65}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 123.21</td>
                                <td>April 05, 2015</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <img
                                    src="../../../assets/images/faces-clipart/pic-3.png"
                                    alt="image"
                                  />
                                </td>
                                <td>Henry Tom</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "20%" }}
                                      aria-valuenow={20}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 150.00</td>
                                <td>June 16, 2015</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Bordered table</h4>
                        <p className="card-description">
                          {" "}
                          Add class <code>.table-bordered</code>
                        </p>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>First name</th>
                                <th>Progress</th>
                                <th>Amount</th>
                                <th>Deadline</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Herman Beck</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 77.99</td>
                                <td>May 15, 2015</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Messsy Adam</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-danger"
                                      role="progressbar"
                                      style={{ width: "75%" }}
                                      aria-valuenow={75}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$245.30</td>
                                <td>July 1, 2015</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>John Richards</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "90%" }}
                                      aria-valuenow={90}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$138.00</td>
                                <td>Apr 12, 2015</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Peter Meggik</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-primary"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 77.99</td>
                                <td>May 15, 2015</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Edward</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-danger"
                                      role="progressbar"
                                      style={{ width: "35%" }}
                                      aria-valuenow={35}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 160.25</td>
                                <td>May 03, 2015</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>John Doe</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuenow={65}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 123.21</td>
                                <td>April 05, 2015</td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Henry Tom</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "20%" }}
                                      aria-valuenow={20}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 150.00</td>
                                <td>June 16, 2015</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Inverse table</h4>
                        <p className="card-description">
                          {" "}
                          Add class <code>.table-dark</code>
                        </p>
                        <div className="table-responsive">
                          <table className="table table-dark">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>First name</th>
                                <th>Amount</th>
                                <th>Deadline</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Herman Beck</td>
                                <td>$ 77.99</td>
                                <td>May 15, 2015</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Messsy Adam</td>
                                <td>$245.30</td>
                                <td>July 1, 2015</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>John Richards</td>
                                <td>$138.00</td>
                                <td>Apr 12, 2015</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Peter Meggik</td>
                                <td>$ 77.99</td>
                                <td>May 15, 2015</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Edward</td>
                                <td>$ 160.25</td>
                                <td>May 03, 2015</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>John Doe</td>
                                <td>$ 123.21</td>
                                <td>April 05, 2015</td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Henry Tom</td>
                                <td>$ 150.00</td>
                                <td>June 16, 2015</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">
                          Table with contextual classes
                        </h4>
                        <p className="card-description">
                          {" "}
                          Add class{" "}
                          <code>
                            .table-{"{"}color{"}"}
                          </code>
                        </p>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>First name</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Deadline</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table-info">
                                <td>1</td>
                                <td>Herman Beck</td>
                                <td>Photoshop</td>
                                <td>$ 77.99</td>
                                <td>May 15, 2015</td>
                              </tr>
                              <tr className="table-warning">
                                <td>2</td>
                                <td>Messsy Adam</td>
                                <td>Flash</td>
                                <td>$245.30</td>
                                <td>July 1, 2015</td>
                              </tr>
                              <tr className="table-danger">
                                <td>3</td>
                                <td>John Richards</td>
                                <td>Premeire</td>
                                <td>$138.00</td>
                                <td>Apr 12, 2015</td>
                              </tr>
                              <tr className="table-success">
                                <td>4</td>
                                <td>Peter Meggik</td>
                                <td>After effects</td>
                                <td>$ 77.99</td>
                                <td>May 15, 2015</td>
                              </tr>
                              <tr className="table-primary">
                                <td>5</td>
                                <td>Edward</td>
                                <td>Illustrator</td>
                                <td>$ 160.25</td>
                                <td>May 03, 2015</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
              {/* partial:../../partials/_footer.html */}
              {/* <footer className="footer">
                <div className="container">
                  <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                      Copyright © 2021{" "}
                      <a href="https://www.bootstrapdash.com/" target="_blank">
                        BootstrapDash
                      </a>
                      . All rights reserved.
                    </span>
                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                      Hand-crafted &amp; made with{" "}
                      <i className="mdi mdi-heart text-danger" />
                    </span>
                  </div>
                </div>
              </footer> */}
              {/* partial */}
            </div>
            {/* main-panel ends */}
          </div>
          {/* page-body-wrapper ends */}
        </div>
        {/* container-scroller */}
        {/* plugins:js */}
        {/* endinject */}
        {/* Plugin js for this page */}
        {/* End plugin js for this page */}
        {/* inject:js */}
        {/* endinject */}
        {/* Custom js for this page */}
        {/* End custom js for this page */}
      </div>
    </div>
  );
}
