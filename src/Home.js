import React from "react";
import logo from "./images/logo.png";
import headerOne from "./images/header-1.png";
import headerTwo from "./images/header-2.png";
import sectionOne from "./images/section-one.png";
import camera from "./images/camera.jpg";
import play from "./images/play.png";

const Home = () => {
  const countDown = () => {
    const countDate = new Date("April 17, 2022 00:00:00").getTime();
    const today = new Date().getTime();
    const difference = countDate - today;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(difference / day);
    const textHour = Math.floor((difference % day) / hour);
    const textMinute = Math.floor((difference % hour) / minute);
    const textSecond = Math.floor((difference % minute) / second);

    document.querySelector(".day").textContent = textDay;
    document.querySelector(".hour").textContent = textHour;
    document.querySelector(".minute").textContent = textMinute;
    document.querySelector(".second").textContent = textSecond;
  };

  setInterval(countDown, 1000);

  return (
    <>
      <article>
        <nav className="navbar-1">
          <div className="row">
            <div className="col-md-6 text-center text-md-start logo ">
              <img src={logo} alt="logo" />
              <div className="links links-1">
                <a href="#">Members</a>
                <a href="#">Affiliates</a>
                <a href="#">Successes</a>
                <a href="#">Support</a>
              </div>
            </div>

            <div className="col-md-6 links links-2 text-center text-md-end d-none d-lg-block fw-bold">
              <a href="#">Join</a>
              <a href="#">Members Login</a>
              <a href="#">Success Stories</a>
              <a href="#">Support</a>
            </div>
          </div>
        </nav>

        <header>
          <img
            src={headerOne}
            alt="header"
            className="image-1 d-none d-md-block"
            width="100%"
          />
          <img
            src={headerTwo}
            alt="header"
            className="image-2 d-block d-md-none"
            width="100%"
          />
        </header>

        <section className="section-one row g-4">
          <div className="col-md-6 section-image">
            <img
              src={camera}
              alt="russell"
              width="100%"
              className="d-none d-md-block"
            />
            <img src={play} alt="play" width="20%" className="play" />
            <h3 className="text-white">
              The <span>Life</span> You Want, The <span>Marriage</span> You
              Want... The <span>Family</span> That You Want, Is Going To Be{" "}
              <strong>Fueled By The Business You Build...</strong>
            </h3>
          </div>
          <div className="col-md-5 col-12 section text-center">
            <h3 className=" text-white">
              The Next 'ONE FUNNEL AWAY' Challenge Starts On Apr 17th...
            </h3>
            <img src={sectionOne} alt="section-image" width="100%" />
            <div className="timer text-white text-center">
              <div>
                <h3 className="p-3 day">00</h3>
                <p className="text-muted">DAYS</p>
              </div>
              <div>
                <h3 className="p-3 hour">00</h3>
                <p className="text-muted">HOURS</p>
              </div>
              <div>
                <h3 className="p-3 minute">00</h3>
                <p className="text-muted">MINUTES</p>
              </div>
              <div>
                <h3 className="p-3 second">00</h3>
                <p className="text-muted">SECONDS</p>
              </div>
            </div>

            <div className="last-section text-white mt-5">
              <h3 className="heading">Registration Ends Apr 3rd At 10PM ET!</h3>
              <br />
              <h3 className="fw-bold">
                Join The Challenge Now For A One-Time Discounted Payment Of Only
                $100
              </h3>
              <br />
              <button className="d-inline d-md-none px-5 py-3">
                <h3>Start Now!</h3>
                <p>
                  I Want Daily LIVE Coaching and Accountability, From Day 1 to
                  Day 30
                </p>
              </button>
              <button className="d-none d-md-inline px-5 py-3 mx-3">
                <h3>Join The Challenge Now!</h3>
                <p>
                  I Want Daily LIVE Coaching and Accountability, From Day 1 to
                  Day 30
                </p>
              </button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;
