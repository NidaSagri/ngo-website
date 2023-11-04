import React from "react";
import "./Home.css";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img5 from "../images/img5.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import team from "../images/team.png";

const Home = () => {
  return (
    <>
      <div className="home-carousel">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="overlay"></div>

            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="pic1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>It's that easy to bring a Smile on Their Faces</h5>
                <p>
                  We don't ask for much, just help us with what you can- Be it
                  Money, Skill or Your Time
                </p>
                <button className="btn">Donate Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Think global, Act local.</h5>
                <p>
                  "NayePankh Foundation" is a non governmental organisation with
                  a strong desire to help the society and make it a better place
                  for all.
                </p>
                <button className="btn">Donate Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <button className="btn">Donate Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img5} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Fourth slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <button className="btn">Donate Now</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container">
          <div className="cards">
            <div className="card">
              <div className="icon">
                <i
                  class="fa-solid fa-circle-dollar-to-slot"
                  style={{ color: "#7e8680" }}
                ></i>
                <h3>Monetary Help</h3>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, neque? Praesentium
            </div>
            <div className="card">
              <div className="icon">
                <i
                  class="fa-solid fa-kit-medical"
                  style={{ color: "#7e8680" }}
                ></i>
                
                <h3>Medical Aid</h3>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              illum saepe dolor deserunt accusamus 
            </div>
            <div className="card">
              <div className="icon">
                <i
                  class="fa-solid fa-bowl-food"
                  style={{ color: "#7e8680" }}
                ></i>
                <h3>Nutritional Help</h3>
              </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              minima suscipit 
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="section1">
              <img src={img2} alt="" />
          </div>

          <div className="section2">
            <h2>ABOUT US</h2>

            <h5>Think global, Act local.</h5>
            <p>
              "NayePankh Foundation" is a non governmental organisation with a
              strong desire to help the society and make it a better place for
              all, by doing everything in our power and to make our vision
              successful we would require your vital support. Service to mankind
              is the service to god. Let's revolutionise the society together!
            </p>

            <button className="btn1">Learn More</button>
            <button className="btn1">Our Certificates</button>

          </div>
        </div>

        <div className="container3">

          <div className="section2">
            <h2>JOIN OUR</h2>

            <h5>TEAM</h5>
            <p>
            "Join our team and make a difference in the lives of those in need. At NayePankh Foundation, we are committed to creating positive change and empowering communities. By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact. Whether you are passionate about education, health, or providing support during times of crisis, there is a place for you on our team. Join us today and be a part of an organization that is making a difference, one person at a time."
            </p>

            <button className="btn1">JOIN</button>

          </div>

          <div className="section1">
              <img src={team} alt="" />
          </div>

        </div>


        <div className="container4">
          <h5>"If we all do something, then together there is no problem that we cannot solve!"</h5>
          <h2>PRASHANT SHUKLA</h2>
          <p>Founder & President, NayePankh Foundation</p>
        </div>


      </div>
    </>
  );
};

export default Home;
