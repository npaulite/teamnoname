import React, { useContext } from "react";
import { Typography } from "@mui/material";
import AuthContext from "../components/AuthProvider";
import { display } from "@mui/system";
import { Directions } from "@mui/icons-material";

export default function Home() {
  const { authorized } = useContext(AuthContext);

  return (
    <div>
      <h1 className="container">
        <div className="row">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <a href="https://www.vendia.com/">
              <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/cpuf13twbf75y9bjau7h.png" />
            </a>
            {authorized == null ? (
              <></>
            ) : (
              <div style={{ paddingTop: "100px" }}>
                <Typography variant="h5">
                  Welcome, {authorized?.name}{" "}
                </Typography>
                <Typography variant="h5">Role: {authorized?.role} </Typography>
              </div>
            )}
          </div>
        </div>
      </h1>
      {/* end slider section */}
      {/* about section */}
      <section className="about_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img
                  src="https://www.vendia.com/images/illustrations/Vendia_HPIcon.svg"
                  alt
                />
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
                <a href="https://www.vendia.com/">Read More</a>
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
            <h2>Fast facts about Vendia and how we help our customers</h2>
          </div>
          <div className="service_container">
            <div className="box">
              <div className="img-box">
                <img src="images/s-1.png" alt />
              </div>
              <div className="detail-box">
                <h5>93%</h5>
                <p>
                  Avg. reduction in manual, multi-source data reconciliation
                  costs with Vendia Share
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-2.png" alt />
              </div>
              <div className="detail-box">
                <h5>87%</h5>
                <p>
                  Avg. reduction in time spent investigating and resolving data
                  inconsistencies thanks to Vendia Share
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-3.png" alt />
              </div>
              <div className="detail-box">
                <h5>$1.4MM</h5>
                <p>
                  Avg. single customer savings in Year One when operating on the
                  Vendia Share platform
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-4.png" alt />
              </div>
              <div className="detail-box">
                <h5>+50% MoM</h5>
                <p>
                  Avg. increase in customer API calls to deliver an up-to-date,
                  auto-reconciled golden record
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-5.png" alt />
              </div>
              <div className="detail-box">
                <h5>$50 MM</h5>
                <p>
                  Vendia’s total funding from trusted IT and SaaS focused VCs
                  who value relationships as much as results
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="https://www.vendia.com/about">Read More</a>
          </div>
        </div>
      </section>
      ;{/* end service section */}
      {/* work section */}
      <section className="work_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>What we do</h2>
            <p>
              Our SaaS platform makes it possible for companies and nonprofits
              to participate in a real-time data ecosystem — all with a shared
              but single, accurate, complete, compliant, and automated source of
              truth. We deliver Truth-as-a-service, no matter how many data
              sources or their points of origin.
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
                    <h5>How we do it</h5>
                  </div>
                  <div className="bottom-box">
                    <p>
                      We’ve built the only trusted shared data exchange that
                      combines the best of business blockchain, Smart APIs, and
                      cloud database technology as a single, scalable Saas
                      platform. The platform is Vendia Share, and we’re trusted
                      by startups, the Global 2000, and government-sponsored
                      enterprises alike.
                    </p>
                  </div>
                </div>
                <div className="box b-1">
                  <div className="top-box">
                    <div className="icon-box">
                      <img src="images/work-i2.png" alt />
                    </div>
                    <h5>Our vision</h5>
                  </div>
                  <div className="bottom-box">
                    <p>
                      Responsible, compliant, real-time data sharing has the
                      power to transform industries, customer experiences, and
                      communities — all for the better. At Vendia. we want to
                      live in a world where there’s far more time, talent, and
                      money spent on indisputable truth, earned trust, and
                      valuable innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img
                  src="https://www.thegatewaydigital.com/wp-content/uploads/2020/07/Services-Level-Page-1_professional-services_CoE_4.1.webp"
                  alt
                />
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="https://www.vendia.com/about">Read More</a>
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
              Tim Wagner, Ph.D., and Shruthi Rao envisioned a better way for
              businesses to share data and, at the same time, eliminate cost
              centers. As they talked with +1,100 technology and line of
              business leaders, they discovered they all needed the same thing —
              a way to accelerate time to innovation and share a single copy of
              truth, no matter what technology they and their data-sharing
              partners use.
            </p>
          </div>
        </div>
        <div className="team_container">
          <div className="box b-1">
            <div className="img-box">
              <img src="images/Capture1.png" alt />
            </div>
            <div className="detail-box">
              <h5>Tim Wagner</h5>
              <p>
                Tim (on LinkedIn) had left Coinbase with the kernel of an idea:
                That the weaknesses of blockchains — their poor performance,
                scaling limitations, and difficult deployment models — could be
                addressed through a radically different architecture, informed
                by his time building massively multi-tenanted cloud services for
                AWS. Similarly, the challenges of existing serverless compute
                approaches — their “single cloud, single account” nature and
                lack of a built-in state model — might be fixable with ideas
                from blockchains.
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
              <img src="images/Capture.png" alt />
            </div>
            <div className="detail-box">
              <h5>Shruthi Rao</h5>
              <p>
                Shruthi (on LinkedIn) was running business development for AWS's
                blockchain division, including Amazon Managed Blockchain (a
                productization of the open source Hyperledger Fabric code) and
                QLDB — a centralized (single owner) database with ledger-like
                capabilities. In that role, Shruthi got to speak to hundreds of
                companies from every possible industry sector and learn about
                their challenges.
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
              <img src="images/Capture2.jpg" alt />
            </div>
            <div className="detail-box">
              <h5>sadfjlds</h5>
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
            <h2>Instant Reconciliation and Full chain of custody</h2>
            <p>
              Eliminate the costs of manual, error-prone reconciliation from
              partner data. Vendia Share offers automatic, real-time
              reconciliation with an accurate, indisputable, and trusted source
              of truth. Track and trace product DNA, inventory, customers, and
              shipping information across supply chain partners. Vendia Share
              provides a fully auditable, versioned, and immutable source of
              truth.
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
                    <h6>
                      Vendia included in "Gartner Cool Vendor in Cloud
                      Computing"
                    </h6>
                    <p>
                      A multicloud strategy is becoming inevitable for most
                      global enterprises, but it brings security, integration,
                      cost and governance challenges. CIOs should assess these
                      Cool Vendors that are disrupting the cloud market through
                      robust multicloud implementation products. -Gartner 2021
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
