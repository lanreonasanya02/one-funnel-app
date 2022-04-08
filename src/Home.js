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
import womanTest from "./images/woman-test.png";
import prices from "./images/prices.png";
import pricesHead from "./images/prices-head.png";
import russelCrypto from "./images/ofa-small.png";
import laptop from "./images/laptop.png";
import laptopPhone from "./images/laptop-phone.png";
import laptopWoman from "./images/laptop-woman.png";

const Home = () => {
  const countDown = () => {
    const countDate = new Date("April 30, 2022 00:00:00").getTime();
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
              The Next 'ONE FUNNEL AWAY' Challenge Starts On Apr 30th...
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
              <h3 className="heading">
                Registration Ends Apr 30th At 10PM ET!
              </h3>
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
          <img
            src={money}
            alt="money-note"
            width="100%"
            className="money-image"
          />
          <div className="section-four-sub">
            <h4>
              With the One Funnel Away Challenge, we could easily charge $1,000
              for the full 30 day challenge…
            </h4>
            <h4>Probably even $2,000, or more, but...</h4>
            <h1 className="display-1">All You Pay Is $100! </h1>
            <img
              src={womanTest}
              alt="testimonial"
              width="100%"
              className="test1-image"
            />
          </div>
        </section>

        <section className="section-five text-center">
          <h1 className="display-4">
            Then In Exchange For That Tiny $100 Investment, You Get ALL Of This:
          </h1>
          <div className="section-five-inner border border-3 border-dark">
            <img src={pricesHead} alt="header" />
            <img src={prices} alt="prices" />

            <h2 className="display-2">
              Total Value: <del>$3,126</del>
            </h2>

            <h3 className="mt-2 px-5">
              If you want to get your funnel LIVE and start building your
              business, then{" "}
              <span>
                <i>this</i>
              </span>{" "}
              is the mission we’re giving you...
            </h3>
            <h3 className="mt-4 second-h3">
              You have 30 Days, starting Apr 30th...
            </h3>
            <h1 className="display-1">
              Do <span>YOU</span> Accept?
            </h1>
            <button className="d-none d-md-inline">
              <h3 className="display-3">Join The Challenge Now!</h3>
              <h4>
                I Want Daily LIVE Coaching and Accountability, From Day 1 to Day
                30
              </h4>
            </button>

            <button className="d-inline d-md-none mx-4">
              <h3>Start Now!</h3>
              <p>
                I Want Daily LIVE Coaching and Accountability, From Day 1 to Day
                30
              </p>
            </button>
          </div>
          <div className="section-five-third">
            <h1 className="display-4">
              Need More Information Before You Make Your Decision...?{" "}
            </h1>

            <h3 className="display-6">
              Let Me Break Down All The Awesome Stuff You'll Get When You Join
              The Challenge Today!
            </h3>
          </div>
        </section>

        <section className="section-six">
          <div className="row">
            <div className="col-md-4">
              <img src={russelCrypto} alt="crypto-image" width="100%" />
            </div>

            <div className="col-md-8 text-white ">
              <h3>
                The First Thing{" "}
                <strong>
                  You’ll <span>Get Access</span> To Is The...
                </strong>
              </h3>
              <h2 className="display-4">'One Funnel Away' </h2>
              <h1 className="display-1">CHALLENGE...</h1>
            </div>
          </div>

          <h5 className="text-center mx-5">
            Led by Trainer{" "}
            <strong>
              Russell Brunson and The ‘One Funnel Away’ Consulting Team,
            </strong>{" "}
            this challenge is designed to help you <strong>Customize</strong>{" "}
            and{"  "}
            <strong>
              <span>IMPLEMENT</span>
            </strong>{" "}
            your first (or next) funnel in just 30 days…
          </h5>

          <section className="row text-center section-seven">
            <div className="col-md-4 bg-white ">
              <div className="card card-1">
                <h3 className="display-6">Step #1</h3>
                <img src={laptop} className="card-img-top" alt="laptop" />
                <div className="card-body card-1">
                  <h5 className="card-title">"The Strategy"</h5>
                  <p className="card-text lead">
                    Each day, you will receive{" "}
                    <span>a new mission from Russell</span>, streamed to the
                    private Facebook group.
                  </p>
                  <p className="card-text lead">
                    These private videos will be about 30 minutes long, and will
                    give you the <span>strategy</span> you have to master for
                    each step you need for success.{" "}
                  </p>
                  <p className="card-text lead">
                    You will have the ability to network with and ask questions
                    to our coaches as well as others OFA-ers who are also going
                    through the challenge with you!
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-md-4 bg-white  ">
              <div className="card card-2">
                <h3 className="display-6">Step #2</h3>
                <img src={laptopPhone} className="card-img-top" alt="laptop" />
                <div className="card-body card-2">
                  <h5 className="card-title">"The Tactics"</h5>
                  <p className="card-text lead">
                    After the stream ends in the Facebook group, you will be
                    given a <b>"One Pager" mission document</b> with the exact
                    step by step tactics you need to implement to complete that
                    step.
                  </p>
                  <p className="card-text lead">
                    There will be videos showing{" "}
                    <span>HOW to implement the strategy</span> as well as a
                    digital workbook to help keep everything clear!
                  </p>
                  <p className="card-text lead">
                    These missions will take between 30-60 minutes to complete
                    each day.
                  </p>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-md-4 bg-white ">
              <div className="card card-3">
                <h3 className="display-6">Step #3</h3>
                <img src={laptopWoman} className="card-img-top" alt="laptop" />
                <div className="card-body card-3">
                  <h5 className="card-title">"Implementation"</h5>
                  <p className="card-text lead">
                    Not only do you get 30 days of daily video coaching and
                    accountability…
                  </p>
                  <p className="card-text lead">
                    You also <strong>LIVE TRAINING SESSIONS DAILY</strong>{" "}
                    Monday - Friday with our expert OFA consultants.
                  </p>
                  <p className="card-text lead">
                    On these special live trainings, you get to pick their
                    brains and ask ANY question you have about your funnels,
                    strategies, your offer, tech challenges, you name it.
                  </p>
                  <p className="card-text lead fw-bold">
                    It’s like having your very own DEDICATED SUPPORT TEAM.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer className="mt-5 text-center p-5">
        <img src={logo} alt="logo" />
        <br />
        <br />
        <div className="links links-2 text-center ">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
          <a href="#">Cookie Preferences</a>
        </div>
        <br />
        <p>
          California residents can obtain information about the categories of
          personal information collected, and the business purposes for which
          the information is collected, by clicking here.
        </p>
        <p>
          © 2022 ETISON LLC - All Rights Reserved - 3443 W Bavaria St, Eagle, ID
          83616
        </p>
      </footer>
    </>
  );
};

export default Home;
