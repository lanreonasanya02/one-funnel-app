import React from "react";
import logo from "./images/logo.png";
import headerOne from "./images/header-1.png";
import headerTwo from "./images/header-2.png";
import sectionOne from "./images/section-one.png";
import camera from "./images/camera.jpg";
import play from "./images/play.png";
import exclaim from "./images/exclaim.png";
import man from "./images/man.jpg";
import money from "./images/100dollars.jpg";

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

      <main className="section-two border border-1 border-outline-light">
        <section className="row ">
          <div className="col-md-4 image text-center d-none d-md-block">
            <img src={exclaim} alt="exclamation-mark" />
          </div>
          <div className="col-md-7 col-12 text ">
            <div className="d-none d-md-block">
              {" "}
              <h1 className="head-1 display-5">Freedom Is Just</h1>
              <h1 className="head-2 display-3">One Funnel Away</h1>
            </div>
            <div className="d-block d-md-none ">
              {" "}
              <h1 className="head-2 display-2">Just One Funnel</h1>
              <h1 className="head-1 display-5">Can Change Your Life</h1>
            </div>
          </div>

          <div className="row mt-4 section-two-text ">
            <div className="text-2 col-md-7 col-12 text-start ps-5">
              <h4>
                <span className="override names">From:</span> Russell Brunson
              </h4>
              <h4>
                <span className="override names">Where:</span> Boise, Idaho
              </h4>
              <br />
              <h4>
                What does{" "}
                <span className="override">
                  'One Funnel Away' mean for you...?
                </span>
              </h4>
              <br />
              <h4>For everyone it's different...</h4>
              <br />
              <h4>
                For some of you, <span>you're in a job that you hate</span>, and
                you're trying to get out.
              </h4>
              <br />
              <h4>
                For others, you are entrepreneurs with your own company...{" "}
                <span>but you're stuck</span>, and you're not sure why.
              </h4>
              <br />
              <h4>
                And for others of you, you're looking for that one funnel that
                will help you to{" "}
                <span className="override">have more impact on the world!</span>
              </h4>
              <br />
              <h4>
                Before I share with you MY GOAL for this 'One Funnel Away
                challenge for YOU... let me ask you a few questions...
              </h4>
            </div>
            <div className="image-2 col-md-5 col-12 text-center">
              <img src={man} alt="russell" width="100%" />
            </div>
          </div>
        </section>

        <section className="section-three">
          <h1 className="display-5 text-center">
            Please Check All Of The Questions Where Your Answer Is YES!
          </h1>
          <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <h3>
              Do you want to grow your business online, but you have{" "}
              <span>NO IDEA where to start?</span>
            </h3>
          </div>
          <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <h3>
              Do you have a company that's been successful, but for some reason{" "}
              <span>you're feeling stuck?</span>
            </h3>
          </div>
          <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <h3>
              Do you want <span>direct live access to experts</span> who can
              help you with your funnels, strategy offer, marketing, sales, and
              ANY question you have?{" "}
            </h3>
          </div>
          <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <h3>
              Are you trying to figure out a way to{" "}
              <strong>reach more people</strong>, or have a{" "}
              <span>bigger impact on the world?</span>
            </h3>
          </div>
          <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <h3>
              Are you <strong>convinced that you need a funnel</strong>, but you
              aren't quite sure what steps to take?
            </h3>
          </div>
          <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <h3>
              Are you <span>about to launch your next funnel</span>, and want to
              make sure it's a <strong>huge success!?!</strong>
            </h3>
          </div>
        </section>

        <section className="section-four text-center">
          <h2 className="display-6">
            If You Checked ANY Of The Boxes Above, Then I Want To Invite You To
            Join The <strong>'One Funnel Away'</strong> Challenge{" "}
            <span>And Change Your Business Forever!</span>
          </h2>
          <h1 className="display-2">So, Here Is How The Challenge Works...</h1>
          <h4>
            <span>The challenge costs $100 to join.</span> This covers your
            materials during the challenge (more info on this below).
          </h4>
          <img src={money} alt="" width="100%" />
          <div className="section-four-sub">
            <h4>
              With the One Funnel Away Challenge, we could easily charge $1,000
              for the full 30 day challenge…
            </h4>
            <h4>Probably even $2,000, or more, but...</h4>
            <h1 className="display-1">All You Pay Is $100! </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
