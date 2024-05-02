import React from "react";
import "../style/global.css";
import TabsPage from "./TabsPage";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center py-5">
            <div className="d-flex flex-column  align-items-center">
              <h2>Welcome To AllyHeart</h2>
              <p className="text-secondary">
                Explore Hospitals, Doctors, Pharmacies, Resturant, Hotels and
                more.
              </p>
            </div>
          </div>
        </div>

        <div className="row row-gap-3">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-deck">
              <img
                src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-text">Services</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-deck">
              <img
                src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-text">Lab Tests</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-deck">
              <img
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-text">Doctors</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-deck">
              <img
                src="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-text">Medicines</h5>
              </div>
            </div>
          </div>
        </div>
        <TabsPage
          heading={"Explore Lab Test's"}
          tabTitle1={"General"}
          tabTitle2={"TransgenderHealth"}
          tabTitle3={"SexualHealth"}
          tabId1={"general-tab-pane"}
          tabId2={"transgenderhealth-tab-pane"}
          tabId3={"sexualhealth-tab-pane"}
        />

        <div className="row py-2 mt-5 row-gap-3">
          <div className="col-12 col-sm-6 col-md-3 image-gallery">
            <div class="card bg-dark text-white">
              <img src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img" alt="image" />
            </div>
            <div className="gallery-content">
              <h2 className="text-center m-0 ">
                Health<br></br> Products
              </h2>
              <div className="gallery-content-button">
                <button className="discover-button">DISCOVER</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 image-gallery">
            <div class="card bg-dark text-white">
              <img src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img" alt="image" />
            </div>
            <div className="gallery-content">
              <h2 className="text-center m-0 ">
                Health<br></br> Products
              </h2>
              <div className="gallery-content-button">
                <button className="discover-button">DISCOVER</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 image-gallery">
            <div class="card bg-dark text-white">
              <img src="https://images.pexels.com/photos/3786128/pexels-photo-3786128.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img" alt="image" />
            </div>
            <div className="gallery-content">
              <h2 className="text-center m-0 ">
                Health<br></br> Products
              </h2>
              <div className="gallery-content-button">
                <button className="discover-button">DISCOVER</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 image-gallery">
            <div class="card bg-dark text-white">
              <img src="https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img" alt="image" />
            </div>
            <div className="gallery-content">
              <h2 className="text-center m-0 ">
                Health<br></br> Products
              </h2>
              <div className="gallery-content-button">
                <button className="discover-button">DISCOVER</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-md-5 mt-2 pb-4 row-gap-3">
          <div className="col-12 heading-box">
            <div className="text-bigger">
              <h1 className="text-sm-center xl-text">Hand-Pick</h1>
            </div>
            <div className="text-head">
              <h1 className="text-sm-center heading-2">Top Listing This Week</h1>
            </div>
            <div>
              <p className="text-sm-center text-para">
                Every week we hand-pick some of the best new listings from our
                collection.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">Card title</h5>
                <p className="card-text text-color image-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">Card title</h5>
                <p className="card-text text-color image-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/7089044/pexels-photo-7089044.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">Card title</h5>
                <p className="card-text text-color image-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <TabsPage
          heading={"Explore Doctor's"}
          tabTitle1={"General"}
          tabTitle2={"TransgenderHealth"}
          tabTitle3={"SexualHealth"}
          tabId1={"generaldoctor-tab-pane"}
          tabId2={"transgenderdoctor-tab-pane"}
          tabId3={"sexualdoctor-tab-pane"}
        />

        <div className="row my-5">
          <div className="col-12 heading-box py-3">
            <div className="text-bigger">
              <h1 className="text-sm-center  xl-text">Features</h1>
            </div>
            <div className="text-head">
              <h1 className="text-sm-center heading-2">"Your Health....Your Ally...."</h1>
            </div>
            <div>
              <p className="text-sm-center text-para">
                Ally Heart Provides Accessible and Affirmative Digital
                Healthcare to <br /> LGBTQIA+ Individuals.
              </p>
            </div>
          </div>

          <div class="col-sm-4 mt-5">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <i className="fa-solid fa-eye font-awesome-size"></i>
                </h5>
                <h4 class="card-text">Our Vision</h4>
                <p className="text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque quis nam dolorum modi eaque quas qui quod, soluta iure
                  ducimus?
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mt-5">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="fa-solid fa-bullseye font-awesome-size"></i>
                </h5>
                <h4 class="card-text">Our Mission</h4>
                <p className="text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque quis nam dolorum modi eaque quas qui quod, soluta iure
                  ducimus?
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mt-5">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="fa-solid fa-heart font-awesome-size"></i>
                </h5>
                <h4 class="card-text">Our Commitment</h4>
                <p className="text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque quis nam dolorum modi eaque quas qui quod, soluta iure
                  ducimus?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 row-gap-4 pb-4">
          <h1 className="text-center pt-4">The Latest Listing</h1>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/1424538/pexels-photo-1424538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">General</h5>
                <p className="card-text text-color">5 Listing</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/3873135/pexels-photo-3873135.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">Health Products</h5>
                <p className="card-text text-color">2 Listing</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/2529375/pexels-photo-2529375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">Woment Health</h5>
                <p className="card-text text-color">3 Listing</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">Men Health</h5>
                <p className="card-text text-color">15 Listing</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/6787205/pexels-photo-6787205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">Transgender Health</h5>
                <p className="card-text text-color">5 Listing</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-bg-dark border-0">
              <img
                src="https://images.pexels.com/photos/792726/pexels-photo-792726.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img"
                alt="carousel-image"
              />
              <div class="card-img-overlay opacity-50 bg-color-overlay"></div>
              <div className="card-img-overlay">
                <h5 className="card-title text-color">Sexual Health</h5>
                <p className="card-text text-color">12 Listing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row border-top mt-5">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                  <p className="mt-5">
                    © 2022 Company, Inc. All rights reserved.
                  </p>
                </form>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
