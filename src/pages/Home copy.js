import React, { useContext } from "react";
import { Typography } from "@mui/material";
import AuthContext from "../components/AuthProvider";

export default function Home() {
  const { authorized } = useContext(AuthContext);

  return (
    <div>
      <h1 className="container">
        <div className="home">
          <a href="https://www.vendia.com/">
            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/cpuf13twbf75y9bjau7h.png" />
          </a>
          {authorized == null ? (
            <></>
          ) : (
            <div className="user">
              <Typography variant="h5">Hi, {authorized?.name} </Typography>
              <Typography variant="h5">Role: {authorized?.role} </Typography>
            </div>
          )}
        </div>
      </h1>
      {/* end slider section */}
      {/* about section */}
      <section className="about_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img2.png" alt />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Vendia: Bring Trust to Data</h2>
                </div>
                <p>
                  Vendia Share is built to make data sharing easier between
                  partners. To bring trust and a single source of truth to
                  partner data sharing and secure, compliant, real-time
                  collaboration — no matter your partners’ geographies, stack of
                  systems, data architecture, or clouds. It combines business
                  blockchain, smart APIs, and cloud databases.
                </p>
                <a href>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* end about section */}
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container">
            <h2>Our Services</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service_container">
            <div className="box">
              <div className="img-box">
                <img src="images/s-1.png" alt />
              </div>
              <div className="detail-box">
                <h5>Brand Promotion</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-2.png" alt />
              </div>
              <div className="detail-box">
                <h5>Video Marketing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-3.png" alt />
              </div>
              <div className="detail-box">
                <h5>Site Analysis</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-4.png" alt />
              </div>
              <div className="detail-box">
                <h5>Social Media Marketing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-5.png" alt />
              </div>
              <div className="detail-box">
                <h5>SEO Optimization</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href>Read More</a>
          </div>
        </div>
      </section>
      ;{/* end service section */}
      {/* work section */}
      <section className="work_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>How We Work!</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="detail_container">
                <div className="box b-1">
                  <div className="top-box">
                    <div className="icon-box">
                      <img src="images/work-i1.png" alt />
                    </div>
                    <h5>We Generate A Good Idea First</h5>
                  </div>
                  <div className="bottom-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                  </div>
                </div>
                <div className="box b-1">
                  <div className="top-box">
                    <div className="icon-box">
                      <img src="images/work-i2.png" alt />
                    </div>
                    <h5>Then We Start Applying Ideas</h5>
                  </div>
                  <div className="bottom-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/work-img.png" alt />
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href>Read More</a>
          </div>
        </div>
      </section>
      ;{/* end work section */}
      {/* team section */}
      <section className="team_section layout_padding2-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Meet The Team</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="team_container">
          <div className="box b-1">
            <div className="img-box">
              <img src="images/t-1.png" alt />
            </div>
            <div className="detail-box">
              <h5>Yokit Den</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="social_box">
                <a href>
                  <img src="images/fb.png" alt />
                </a>
                <a href>
                  <img src="images/twitter.png" alt />
                </a>
                <a href>
                  <img src="images/linkedin.png" alt />
                </a>
                <a href>
                  <img src="images/insta.png" alt />
                </a>
              </div>
            </div>
          </div>
          <div className="box b-2">
            <div className="img-box">
              <img src="images/t-2.png" alt />
            </div>
            <div className="detail-box">
              <h5>Morde Den</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="social_box">
                <a href>
                  <img src="images/fb.png" alt />
                </a>
                <a href>
                  <img src="images/twitter.png" alt />
                </a>
                <a href>
                  <img src="images/linkedin.png" alt />
                </a>
                <a href>
                  <img src="images/insta.png" alt />
                </a>
              </div>
            </div>
          </div>
          <div className="box b-3">
            <div className="img-box">
              <img src="images/t-3.png" alt />
            </div>
            <div className="detail-box">
              <h5>Marry Doki</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="social_box">
                <a href>
                  <img src="images/fb.png" alt />
                </a>
                <a href>
                  <img src="images/twitter.png" alt />
                </a>
                <a href>
                  <img src="images/linkedin.png" alt />
                </a>
                <a href>
                  <img src="images/insta.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* end team section */}
      {/* client section */}
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Testimonial</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="detail-box">
                    <h6>Normal distribution</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                    <img src="images/quote.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="detail-box">
                    <h6>Normal distribution</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                    <img src="images/quote.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="detail-box">
                    <h6>Normal distribution</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                    <img src="images/quote.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-container">
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}
