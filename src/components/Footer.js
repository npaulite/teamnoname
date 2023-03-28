import React from "react";

export default function () {
  return (
    <div>
      <div className="footer_bg">
        {/* info section */}
        <section className="info_section layout_padding2">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="info_logo">
                  <h3>Seotech</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor indidunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_links">
                  <h4>BASIC LINKS</h4>
                  <ul className="  ">
                    <li className=" ">
                      <a className href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="active">
                      <a className href="about.html">
                        {" "}
                        About
                      </a>
                    </li>
                    <li className>
                      <a className href="service.html">
                        {" "}
                        Services{" "}
                      </a>
                    </li>
                    <li className>
                      <a className href="#contactLink">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_contact">
                  <h4>CONTACT DETAILS</h4>
                  <a href>
                    <div className="img-box">
                      <img
                        src={"images/telephone-white.png"}
                        width="12px"
                        alt
                      />
                    </div>
                    <p>+01 1234567890</p>
                  </a>
                  <a href>
                    <div className="img-box">
                      <img src={"images/envelope-white.png"} width="18px" alt />
                    </div>
                    <p>demo@gmail.com</p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_form ">
                  <h4>NEWSLETTER</h4>
                  <form action>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </form>
                  <div className="social_box">
                    <a href>
                      <img src={"images/info-fb.png"} alt />
                    </a>
                    <a href>
                      <img src={"images/info-twitter.png"} alt />
                    </a>
                    <a href>
                      <img src={"images/info-linkedin.png"} alt />
                    </a>
                    <a href>
                      <img src={"images/info-youtube.png"} alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end info_section */}
        {/* footer section */}
        <section className="container-fluid footer_section">
          <div className="container">
            <p>
              © <span id="displayYear" /> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </div>
        </section>
        {/* footer section */}
      </div>
    </div>
  );
}
