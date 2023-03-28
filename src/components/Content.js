import React from "react";

export default function Content() {
  return (
    <div>
      <div className="content-wrapper pb-0">
        <div className="page-header flex-wrap">
          <div className="header-left">
            <button className="btn btn-primary mb-2 mb-md-0 me-2">
              {" "}
              Create new document{" "}
            </button>
            <button className="btn btn-outline-primary mb-2 mb-md-0">
              {" "}
              Import documents{" "}
            </button>
          </div>
          <div className="header-right d-flex flex-wrap mt-md-2 mt-lg-0">
            <div className="d-flex align-items-center">
              <a href="#">
                <p className="m-0 pe-3">Dashboard</p>
              </a>
              <a className="ps-3 me-4" href="#">
                <p className="m-0">ADE-00234</p>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-2 mt-sm-0 btn-icon-text"
            >
              <i className="mdi mdi-plus-circle" /> Add Prodcut{" "}
            </button>
          </div>
        </div>
        {/* first row starts here */}
        <div className="row">
          <div className="col-xl-9 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between flex-wrap">
                  <div>
                    <div className="card-title mb-0">Sales Revenue</div>
                    <h3 className="font-weight-bold mb-0">$32,409</h3>
                  </div>
                  <div>
                    <div className="d-flex flex-wrap pt-2 justify-content-between sales-header-right">
                      <div className="d-flex me-5">
                        <button
                          type="button"
                          className="btn btn-social-icon btn-outline-sales"
                        >
                          <i className="mdi mdi-inbox-arrow-down" />
                        </button>
                        <div className="ps-2">
                          <h4 className="mb-0 font-weight-semibold head-count">
                            {" "}
                            $8,217{" "}
                          </h4>
                          <span className="font-10 font-weight-semibold text-muted">
                            TOTAL SALES
                          </span>
                        </div>
                      </div>
                      <div className="d-flex me-3 mt-2 mt-sm-0">
                        <button
                          type="button"
                          className="btn btn-social-icon btn-outline-sales profit"
                        >
                          <i className="mdi mdi-cash text-info" />
                        </button>
                        <div className="ps-2">
                          <h4 className="mb-0 font-weight-semibold head-count">
                            {" "}
                            2,804{" "}
                          </h4>
                          <span className="font-10 font-weight-semibold text-muted">
                            TOTAL PROFIT
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted font-13 mt-2 mt-sm-0">
                  {" "}
                  Your sales monitoring dashboard template.{" "}
                  <a className="text-muted font-13" href="#">
                    <u>Learn more</u>
                  </a>
                </p>
                <div className="flot-chart-wrapper">
                  <div id="flotChart" className="flot-chart">
                    <canvas className="flot-base" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 stretch-card grid-margin">
            <div className="card card-img">
              <div className="card-body d-flex align-items-center">
                <div className="text-white">
                  <h1 className="font-20 font-weight-semibold mb-0">
                    {" "}
                    Get premium{" "}
                  </h1>
                  <h1 className="font-20 font-weight-semibold">account!</h1>
                  <p>to optimize your selling prodcut</p>
                  <p className="font-10 font-weight-semibold">
                    {" "}
                    Enjoy the advantage of premium.{" "}
                  </p>
                  <button className="btn bg-white font-12">Get Premium</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chart row starts here */}
        <div className="row">
          <div className="col-sm-6 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="card-title">
                    {" "}
                    Customers{" "}
                    <small className="d-block text-muted">
                      August 01 - August 31
                    </small>
                  </div>
                  <div className="d-flex text-muted font-20">
                    <i className="mdi mdi-printer mouse-pointer" />
                    <i className="mdi mdi-help-circle-outline ms-2 mouse-pointer" />
                  </div>
                </div>
                <h3 className="font-weight-bold mb-0">
                  {" "}
                  2,409{" "}
                  <span className="text-success h5">
                    4,5%
                    <i className="mdi mdi-arrow-up" />
                  </span>
                </h3>
                <span className="text-muted font-13">Avg customers/Day</span>
                <div className="line-chart-wrapper">
                  <canvas id="linechart" height={80} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="card-title">
                    {" "}
                    Conversions{" "}
                    <small className="d-block text-muted">
                      August 01 - August 31
                    </small>
                  </div>
                  <div className="d-flex text-muted font-20">
                    <i className="mdi mdi-printer mouse-pointer" />
                    <i className="mdi mdi-help-circle-outline ms-2 mouse-pointer" />
                  </div>
                </div>
                <h3 className="font-weight-bold mb-0">
                  {" "}
                  0.40%{" "}
                  <span className="text-success h5">
                    0.20%
                    <i className="mdi mdi-arrow-up" />
                  </span>
                </h3>
                <span className="text-muted font-13">Avg customers/Day</span>
                <div className="bar-chart-wrapper">
                  <canvas id="barchart" height={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image card row starts here */}
        <div className="row">
          <div className="col-sm-4 stretch-card grid-margin">
            <div className="card">
              <div className="card-body p-0">
                <img
                  className="img-fluid w-100"
                  src="../assets/images/dashboard/img_1.jpg"
                  alt
                />
              </div>
              <div className="card-body px-3 text-dark">
                <div className="d-flex justify-content-between">
                  <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                  <i className="mdi mdi-heart-outline" />
                </div>
                <h5 className="font-weight-semibold">
                  {" "}
                  Cosy Studio flat in London{" "}
                </h5>
                <div className="d-flex justify-content-between font-weight-semibold">
                  <p className="mb-0">
                    <i className="mdi mdi-star star-color pe-1" />
                    4.60 (35)
                  </p>
                  <p className="mb-0">$5,267/night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 stretch-card grid-margin">
            <div className="card">
              <div className="card-body p-0">
                <img
                  className="img-fluid w-100"
                  src="../assets/images/dashboard/img_2.jpg"
                  alt
                />
              </div>
              <div className="card-body px-3 text-dark">
                <div className="d-flex justify-content-between">
                  <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                  <i className="mdi mdi-heart-outline" />
                </div>
                <h5 className="font-weight-semibold">
                  {" "}
                  Victoria Bedsit Studio Ensuite{" "}
                </h5>
                <div className="d-flex justify-content-between font-weight-semibold">
                  <p className="mb-0">
                    <i className="mdi mdi-star star-color pe-1" />
                    4.83 (12)
                  </p>
                  <p className="mb-0">$6,144/night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 stretch-card grid-margin">
            <div className="card">
              <div className="card-body p-0">
                <img
                  className="img-fluid"
                  src="../assets/images/dashboard/img_3.jpg"
                  alt
                />
              </div>
              <div className="card-body px-3 text-dark">
                <div className="d-flex justify-content-between">
                  <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                  <i className="mdi mdi-heart-outline" />
                </div>
                <h5 className="font-weight-semibold">Fabulous Huge Room</h5>
                <div className="d-flex justify-content-between font-weight-semibold">
                  <p className="mb-0">
                    <i className="mdi mdi-star star-color pe-1" />
                    3.83 (15)
                  </p>
                  <p className="mb-0">$5,267/night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* table row starts here */}
        <div className="row">
          <div className="col-xl-4 grid-margin">
            <div className="card card-stat stretch-card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="text-white">
                    <h3 className="font-weight-bold mb-0">$168.90</h3>
                    <h6>This Month</h6>
                    <div className="badge badge-danger">23%</div>
                  </div>
                  <div className="flot-bar-wrapper">
                    <div id="column-chart" className="flot-chart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card stretch-card mb-3">
              <div className="card-body d-flex flex-wrap justify-content-between">
                <div>
                  <h4 className="font-weight-semibold mb-1 text-black">
                    {" "}
                    Member Profit{" "}
                  </h4>
                  <h6 className="text-muted">Average Weekly Profit</h6>
                </div>
                <h3 className="text-success font-weight-bold">+168.900</h3>
              </div>
            </div>
            <div className="card stretch-card mb-3">
              <div className="card-body d-flex flex-wrap justify-content-between">
                <div>
                  <h4 className="font-weight-semibold mb-1 text-black">
                    {" "}
                    Total Profit{" "}
                  </h4>
                  <h6 className="text-muted">Weekly Customer Orders</h6>
                </div>
                <h3 className="text-success font-weight-bold">+6890.00</h3>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body d-flex flex-wrap justify-content-between">
                <div>
                  <h4 className="font-weight-semibold mb-1 text-black">
                    {" "}
                    Issue Reports{" "}
                  </h4>
                  <h6 className="text-muted">System bugs and issues</h6>
                </div>
                <h3 className="text-danger font-weight-bold">-8380.00</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-8 stretch-card grid-margin">
            <div className="card">
              <div className="card-body pb-0">
                <h4 className="card-title">Financial management review</h4>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table custom-table text-dark">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Sale Rate</th>
                        <th>Actual</th>
                        <th>Variance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="../assets/images/faces/face2.jpg"
                            className="me-2"
                            alt="image"
                          />{" "}
                          Jacob Jensen
                        </td>
                        <td>
                          <div className="d-flex">
                            <span className="pe-2 d-flex align-items-center">
                              85%
                            </span>
                            <select
                              id="star-1"
                              name="rating"
                              autoComplete="off"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </td>
                        <td>32,435</td>
                        <td>40,234</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../assets/images/faces/face3.jpg"
                            className="me-2"
                            alt="image"
                          />{" "}
                          Cecelia Bradley
                        </td>
                        <td>
                          <div className="d-flex">
                            <span className="pe-2 d-flex align-items-center">
                              55%
                            </span>
                            <select
                              id="star-2"
                              name="rating"
                              autoComplete="off"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </td>
                        <td>4,36780</td>
                        <td>765728</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../assets/images/faces/face4.jpg"
                            className="me-2"
                            alt="image"
                          />{" "}
                          Leah Sherman
                        </td>
                        <td>
                          <div className="d-flex">
                            <span className="pe-2 d-flex align-items-center">
                              23%
                            </span>
                            <select
                              id="star-3"
                              name="rating"
                              autoComplete="off"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </td>
                        <td>2300</td>
                        <td>22437</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../assets/images/faces/face5.jpg"
                            className="me-2"
                            alt="image"
                          />{" "}
                          Ina Curry
                        </td>
                        <td>
                          <div className="d-flex">
                            <span className="pe-2 d-flex align-items-center">
                              44%
                            </span>
                            <select
                              id="star-4"
                              name="rating"
                              autoComplete="off"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </td>
                        <td>53462</td>
                        <td>1,75938</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../assets/images/faces/face7.jpg"
                            className="me-2"
                            alt="image"
                          />{" "}
                          Lida Fitzgerald
                        </td>
                        <td>
                          <div className="d-flex">
                            <span className="pe-2 d-flex align-items-center">
                              65%
                            </span>
                            <select
                              id="star-5"
                              name="rating"
                              autoComplete="off"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </td>
                        <td>67453</td>
                        <td>765377</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../assets/images/faces/face2.jpg"
                            className="me-2"
                            alt="image"
                          />{" "}
                          Stella Johnson
                        </td>
                        <td>
                          <div className="d-flex">
                            <span className="pe-2 d-flex align-items-center">
                              49%
                            </span>
                            <select
                              id="star-6"
                              name="rating"
                              autoComplete="off"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </td>
                        <td>43662</td>
                        <td>96535</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../assets/images/faces/face9.jpg"
                            className="me-2"
                            alt="image"
                          />{" "}
                          Maria Ortiz
                        </td>
                        <td>
                          <div className="d-flex">
                            <span className="pe-2 d-flex align-items-center">
                              65%
                            </span>
                            <select
                              id="star-7"
                              name="rating"
                              autoComplete="off"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </td>
                        <td>76555</td>
                        <td>258546</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a
                  className="text-black d-block ps-4 pt-2 pb-2 pb-lg-0 font-13 font-weight-bold"
                  href="#"
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* doughnut chart row starts */}
        <div className="row">
          <div className="col-sm-12 stretch-card grid-margin">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="card-title">Channel Sessions</div>
                      <div className="d-flex flex-wrap">
                        <div className="doughnut-wrapper w-50">
                          <canvas
                            id="doughnutChart1"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div
                          id="doughnut-chart-legend"
                          className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="card-title">News Sessions</div>
                      <div className="d-flex flex-wrap">
                        <div className="doughnut-wrapper w-50">
                          <canvas
                            id="doughnutChart2"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div
                          id="doughnut-chart-legend2"
                          className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="card-title">Device Sessions</div>
                      <div className="d-flex flex-wrap">
                        <div className="doughnut-wrapper w-50">
                          <canvas
                            id="doughnutChart3"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div
                          id="doughnut-chart-legend3"
                          className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* last row starts here */}
        <div className="row">
          <div className="col-sm-6 col-xl-4 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="card-title mb-2">Upcoming events (3)</div>
                <h3 className="mb-3">23 september 2019</h3>
                <div className="d-flex border-bottom border-top py-3">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        defaultChecked
                      />
                    </label>
                  </div>
                  <div className="ps-2">
                    <span className="font-12 text-muted">
                      Tue, Mar 5, 9.30am
                    </span>
                    <p className="m-0 text-black">
                      {" "}
                      Hey12345 I attached some new PSD files…{" "}
                    </p>
                  </div>
                </div>
                <div className="d-flex border-bottom py-3">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                  <div className="ps-2">
                    <span className="font-12 text-muted">
                      Mon, Mar 11, 4.30 PM
                    </span>
                    <p className="m-0 text-black">
                      {" "}
                      Discuss performance with manager{" "}
                    </p>
                  </div>
                </div>
                <div className="d-flex border-bottom py-3">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                  <div className="ps-2">
                    <span className="font-12 text-muted">
                      Tue, Mar 5, 9.30am
                    </span>
                    <p className="m-0 text-black">Meeting with Alisa</p>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                  <div className="ps-2">
                    <span className="font-12 text-muted">
                      Mon, Mar 11, 4.30 PM
                    </span>
                    <p className="m-0 text-black">
                      {" "}
                      Hey I attached some new PSD files…{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="d-flex border-bottom mb-4 pb-2">
                  <div className="hexagon">
                    <div className="hex-mid hexagon-warning">
                      <i className="mdi mdi-clock-outline" />
                    </div>
                  </div>
                  <div className="ps-4">
                    <h4 className="font-weight-bold text-warning mb-0">
                      {" "}
                      12.45{" "}
                    </h4>
                    <h6 className="text-muted">Schedule Meeting</h6>
                  </div>
                </div>
                <div className="d-flex border-bottom mb-4 pb-2">
                  <div className="hexagon">
                    <div className="hex-mid hexagon-danger">
                      <i className="mdi mdi-account-outline" />
                    </div>
                  </div>
                  <div className="ps-4">
                    <h4 className="font-weight-bold text-danger mb-0">34568</h4>
                    <h6 className="text-muted">Profile visits</h6>
                  </div>
                </div>
                <div className="d-flex border-bottom mb-4 pb-2">
                  <div className="hexagon">
                    <div className="hex-mid hexagon-success">
                      <i className="mdi mdi-laptop-chromebook" />
                    </div>
                  </div>
                  <div className="ps-4">
                    <h4 className="font-weight-bold text-success mb-0">
                      {" "}
                      33.50%{" "}
                    </h4>
                    <h6 className="text-muted">Bounce Rate</h6>
                  </div>
                </div>
                <div className="d-flex border-bottom mb-4 pb-2">
                  <div className="hexagon">
                    <div className="hex-mid hexagon-info">
                      <i className="mdi mdi-clock-outline" />
                    </div>
                  </div>
                  <div className="ps-4">
                    <h4 className="font-weight-bold text-info mb-0">12.45</h4>
                    <h6 className="text-muted">Schedule Meeting</h6>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="hexagon">
                    <div className="hex-mid hexagon-primary">
                      <i className="mdi mdi-timer-sand" />
                    </div>
                  </div>
                  <div className="ps-4">
                    <h4 className="font-weight-bold text-primary mb-0">
                      {" "}
                      12.45{" "}
                    </h4>
                    <h6 className="text-muted mb-0">Browser Usage</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4 stretch-card grid-margin">
            <div className="card color-card-wrapper">
              <div className="card-body">
                <img
                  className="img-fluid card-top-img w-100"
                  src="../assets/images/dashboard/img_5.jpg"
                  alt
                />
                <div className="d-flex flex-wrap justify-content-around color-card-outer">
                  <div className="col-6 p-0 mb-4">
                    <div className="color-card primary m-auto">
                      <i className="mdi mdi-clock-outline" />
                      <p className="font-weight-semibold mb-0">Delivered</p>
                      <span className="small">15 Packages</span>
                    </div>
                  </div>
                  <div className="col-6 p-0 mb-4">
                    <div className="color-card bg-success m-auto">
                      <i className="mdi mdi-tshirt-crew" />
                      <p className="font-weight-semibold mb-0">Ordered</p>
                      <span className="small">72 Items</span>
                    </div>
                  </div>
                  <div className="col-6 p-0">
                    <div className="color-card bg-info m-auto">
                      <i className="mdi mdi-trophy-outline" />
                      <p className="font-weight-semibold mb-0">Arrived</p>
                      <span className="small">34 Upgraded</span>
                    </div>
                  </div>
                  <div className="col-6 p-0">
                    <div className="color-card bg-danger m-auto">
                      <i className="mdi mdi-presentation" />
                      <p className="font-weight-semibold mb-0">Reported</p>
                      <span className="small">72 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
