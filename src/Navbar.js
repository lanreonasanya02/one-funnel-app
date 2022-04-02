import React from "react";
import logo from "./images/logo.png";
import headerOne from "./images/header-1.png";
import headerTwo from "./images/header-2.png";
import sectionOne from "./images/section-one.png";
import camera from "./images/camera.jpg";
import play from "./images/play.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="row">
          <div className="col-md-6 text-center logo">
            <img src={logo} alt="logo" />
            <div className="links links-1">
              <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                Members
              </a>
              <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                Affiliates
              </a>
              <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                Successes
              </a>
              <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                Support
              </a>
            </div>
          </div>

          <div className="col-md-6 links links-2 text-center d-none d-lg-block">
            <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
              Join
            </a>
            <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
              Members Login
            </a>
            <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
              Success Stories
            </a>
            <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
              Support
            </a>
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
            className="d-none d-lg-block"
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
            The Next 'ONE FUNNEL AWAY' Challenge Starts On Apr 4th...
          </h3>
          <img src={sectionOne} alt="section-image" width="100%" />
          <div className="timer text-white text-center">
            <div>
              <h3 className="p-3">04</h3>
              <p className="text-muted">DAYS</p>
            </div>
            <div>
              <h3 className="p-3">18</h3>
              <p className="text-muted">HOURS</p>
            </div>
            <div>
              <h3 className="p-3">45</h3>
              <p className="text-muted">MINUTES</p>
            </div>
            <div>
              <h3 className="p-3 ">15</h3>
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
                I Want Daily LIVE Coaching and Accountability, From Day 1 to Day
                30
              </p>
            </button>
            <button className="d-none d-md-inline px-5 py-3 mx-3">
              <h3>Join The Challenge Now!</h3>
              <p>
                I Want Daily LIVE Coaching and Accountability, From Day 1 to Day
                30
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
