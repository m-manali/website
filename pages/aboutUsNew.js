import Head from "next/head";
import React from "react";
import $ from "jquery";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
// import Collapsible from 'react-collapsible';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Receivables Exchange of India Ltd :</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Secrtion Starts here*/}

      <div className="header stickHeader">
        <div className="container">
          <a href="#default" className="logo">
            <img
              src="/images/RxilIconBlue.png"
              alt=""
              width="150"
              height="50"
            />
          </a>
          <div className="header-left menu">
            <a href="#" data-category="aboutUs">
              TReDS
            </a>
            <a href="#" data-category="whoWeAre">
              About Us
            </a>
            <a href="#" data-category="benefits">
              Benefits
            </a>
            <a href="#" data-category="newsEvents">
              News & Events
            </a>
            <a href="#" data-category="resources">
              Resources
            </a>
            <a href="#" data-category="contactUs">
              Contact Us
            </a>
          </div>
          <div className="login-strip">
            <a href="https://www.treds.in/rest/login" target="_blank">
              Login
            </a>
            <a
              className="register-btn"
              href="https://onboarding.rxil.in/customerapp/home"
              target="_blank"
            >
              Register
            </a>
          </div>
        </div>
      </div>
      {/* Header Secrtion Ends here*/}

      {/* Hero Banner Secrtion Starts here*/}
      <section
        id="intro"
        className="container theme-widget item active"
        style={{ marginBottom: "70px" }}
      >
        <div className="row">
          <div id="heroImage">
            <img src="/images/aboutUs/Group 25643.png" alt="" />
          </div>
        </div>
        <div
          className="resourcesHeading text-center"
          style={{ margin: "10px 0 50px" }}
        >
          <p>
            <h2 style={{ "font-weight": "650" }}>Who We Are?</h2>
          </p>
        </div>
        <div className="row"></div>
        <div className="pagePadding introPadding">
          <div className="sellerSpan">
            <p style={{ "font-size": "17px" }}>
              RXIL is India's 1st TReDS platform launched under the milestone
              Trade Receivables Discounting System (TReDS) Platform guideline
              issued by Reserve Bank of India(RBI).
              <br />
              <br />
              RXIL helps buyers to provide their MSME suppliers access to
              capital at Competitive rates via auction-based price discovery.
              With its innovative digital platform,RXIL connects small
              businesses and their corporate buyers to financiers.
              <br />
              <br />
              Promoted by renowned institutions such as Small Industries
              Development Bank of India(SIDBI) and National Stock
              Exchange(NSE),RXIL has a legacy of empowering MSME'sand bolstering
              their growth.
            </p>
          </div>
          <div
            className="sellerSpanright"
            style={{ "margin-top": "25px", textAlign: "center" }}
          >
            <img src="/images/aboutUs/Group 25623.png" alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
      {/* Hero Secrtion Starts here*/}

      <section id="aboutUsCards" className="container theme-widget ">
        <div className="row">
          <div className="column">
            <Card style={{ width: "200px", height: "200px" }}>
              <Card.Body>
                <Card.Title>1000</Card.Title>
                <Card.Text>Lorem Ipsum</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="column">
            <Card style={{ width: "200px", height: "200px" }}>
              <Card.Body>
                <Card.Title>1000</Card.Title>
                <Card.Text>Lorem Ipsum</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="column">
            <Card style={{ width: "200px", height: "200px" }}>
              <Card.Body>
                <Card.Title>1000</Card.Title>
                <Card.Text>Lorem Ipsum</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="column">
            <Card style={{ width: "200px", height: "200px" }}>
              <Card.Body>
                <Card.Title>1000</Card.Title>
                <Card.Text>Lorem Ipsum</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* About us vision mission starts here */}
      <section
        id="aboutUsVisionMission"
        className="container theme-widget"
        style={{ paddingTop: "200px" }}
      >
        <div className="row pagePadding">
          <div className="column vision">
            <div className="visionRow1">
              <p className="visionHeading">Vision</p>
            </div>
            <div className=" visionRow2">
              <img
                className="visionImage"
                src="/images/aboutUs/Vision.png"
              ></img>
            </div>
            <div className=" visionRow3">
              <p className="visionText">
                To be an integrated provider of financing platform par
                excellence benchmarked with global best for supporting the
                growth and development of Micro, Small and Medium enterprises
                for their inclusive, sustainable economic and social
                development.
              </p>
            </div>
          </div>

          <div className="column mission">
            <div className=" missionRow1">
              <p className="missionHeading">Mission</p>
            </div>
            <div className=" missionRow2">
              <img
                className="missionImage"
                src="/images/aboutUs/Mission.png"
              ></img>
            </div>
            <div className=" missionRow3">
              <p className="missionText">
                To be numero uno provider of trade receivable financing platform
                and act as a catalyst to achieve the entrepreneurial growth,
                economic success and financial stability for/of the Micro, Small
                and Medium enterprises
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About us vision mission ends here */}

      {/* WHy Rxil Section starts here */}
      <section id="whyRxil" className="container theme-widget">
        <div
          className="resourcesHeading text-center"
          style={{ margin: "10px 0px 50px" }}
        >
          <p>
            <h2 style={{ "font-weight": "650" }}>Why RXIL</h2>
          </p>
        </div>
        <div className="pagePadding introPadding">
          <div className="sellerSpan" style={{ padding: "15px 20px 0px" }}>
            <img src="/images/aboutUs/AboutUsVideo.png" alt="" />
          </div>
          <div className="sellerSpanright" style={{ "padding-left": "40px" }}>
            <p style={{ "font-size": "17px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>

      {/* Why RXil Section ends here */}

      {/* History and milestone section starts here */}
      <section id="historyAndMilestone" className="container theme-widget">
        <div
          className="resourcesHeading text-center"
          style={{ margin: "10px 0px 50px" }}
        >
          <p>
            <h2 style={{ "font-weight": "650" }}>History & Milestones</h2>
          </p>
        </div>
        <div className="historyImage"></div>
      </section>
      {/* History and milestone section ends here */}

      {/* Awards section starts here */}
      <section id="awards" className="container theme-widget">
        <div className="resourcesHeading text-center">
          <p>
            <h2 style={{ "font-weight": "650" }}>Awards & Accolades</h2>
          </p>
        </div>

        <div className="row">
          <div className="column">
            <Card style={{ width: "240px", border: "none" }}>
              <Card.Img
                style={{ width: "200px", margin: "0 auto" }}
                variant="top"
                src="/images/aboutUs/Awards.png"
              />
              <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="column">
            <Card style={{ width: "240px", border: "none" }}>
              <Card.Img
                style={{ width: "200px", margin: "0 auto" }}
                variant="top"
                src="/images/aboutUs/Awards.png"
              />
              <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="column">
            <Card style={{ width: "240px", border: "none" }}>
              <Card.Img
                variant="top"
                src="/images/aboutUs/Awards.png"
                style={{ width: "200px", margin: "0 auto" }}
              />
              <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      {/* Awards section ends here */}

      {/* Contact Us Section Starts Here */}

      <section id="contactUs" className="container theme-widget item">
        <Container>
          <Row>
            <Col>
              <div className="footerImageColl1">
                <img src="/images/FooterIcon.png" alt="" width="200" />
              </div>
            </Col>
            <Col>
              <div>
                <h2 style={{ color: "#FF8B00" }}>QUICK LINKS</h2>
              </div>
            </Col>
            <Col>
              <div>
                <p>
                  <strong>Receivables Exchange of India Limited</strong>
                </p>
                <p>
                  <strong>CIN:</strong>U67190MH2016PLC273522
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="footerTextColl1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. <br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                  <br />
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in <br />
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                  <br />
                </p>
              </div>
            </Col>
            <Col>
              <div className="footerLinks">
                <a href="#">
                  <strong>T & C</strong>
                </a>

                <a href="#">
                  <strong>PRIVACY POLICY</strong>
                </a>

                <a href="#">
                  <strong>DISCLOSURES</strong>
                </a>

                <a href="#">
                  <strong>DISCLAIMER</strong>
                </a>

                <a href="#">
                  <strong>COMPLAINTS & GRIEVANCES</strong>
                </a>
              </div>
            </Col>
            <Col>
              <div>
                <p>Trade Centre (Vatika Business Centre),</p>
                <p>First Floor (Unit no. 02), Office No.14,</p>
                <p>Bandra Kurla Complex, Bandra(East),</p>
                <p>Mumbai 400051</p>
              </div>
              <div className="newsLetter">
                <input type="text" placeholder="NEWSLETTER"></input>
                <button>&#62;</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <p>
                  <img
                    src="/images/TelephoneIcon.png"
                    alt=""
                    width="25px"
                    height="25px"
                  />{" "}
                  02240771424 | 022-40771426 <br />
                  1800 1038 311
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <p>
                  <img
                    src="/images/EmailIcon.png"
                    alt=""
                    width="25px"
                    height="25px"
                  />{" "}
                  info@rxil.in
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <p className="socialShare">
                  <a href="#">
                    {" "}
                    <img
                      src="/images/FacebookIcon.png"
                      alt=""
                      width="20px"
                      height="25px"
                    />
                  </a>{" "}
                  <a href="#">
                    <img
                      src="/images/TwitterIcon.png"
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </a>{" "}
                  <a href="#">
                    <img
                      src="/images/LinkedInIcon.png"
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="copyRight">
        <p>
          <span>&#169;</span> 2020 Receivables Exchange of India Limited. All
          rights reserved.
        </p>
      </div>
      {/* Contact Us Section Ends Here */}

      <style jsx>{`
        .whoWeAreImage {
          display: block;
          margin-left: 500px;
          margin-right: auto;
          padding-bottom: 35px;
        }

        .pagePadding,
        .row.pagePadding {
          padding-left: 10%;
          padding-right: 10%;
        }

        .sellerSpan {
          float: left;
          width: 50%;
        }
        .sellerSpanright {
          float: left;
          width: 50%;
        }

        .sellerSpanright img {
          width: 100%;
        }

        #whyRxil .sellerSpan img {
          width: 100%;
          height: 100%;
        }

        #aboutUsCards {
          background: url("/images/aboutUs/AboutUsCardsBackground.png")
            no-repeat !important;
          width: 100%;
          height: 250px;
          background-size: contain;
          left: 0px;
          padding: 70px 0px 0px !important;
          min-height: auto !important;
        }

        .vision,
        .mission {
          float: left;
          width: 50%;
          text-align: center;
        }

        

        .visionImage {
          width: 20%;
        }
        .missionImage {
          width: 20%;
        }

        .visionHeading,
        .missionHeading {
          font-weight: bold;
          font-size: 30px;
          color: #1c77b0;
        }
        .visionRow1,
        .missionRow1 {
          margin-bottom: 30px;
        }

        .visionRow2,
        .missionRow2 {
          margin-bottom: 20px;
        }

        .visionText {
          padding: 30px;
        }

        .missionText {
          padding: 30px;
        }

        #whyRxil .resourcesHeading p,
        #awards .resourcesHeading p,
        #intro .resourcesHeading p,
        #historyAndMilestone .resourcesHeading p {
          color: #1c77b0;
          position: relative;
          margin-left: 35px;
          display: inline-block;
        }

        #whyRxil .resourcesHeading p:after,
        #awards .resourcesHeading p:after,
        #intro .resourcesHeading p:after,
        #historyAndMilestone .resourcesHeading p:after {
          display: block;
          content: "";
          position: absolute;
          width: 20px;
          height: 2px;
          background: #1c77b0;
          top: 16px;
          left: -25px;
        }

        .historyImage {
          background: url("/images/aboutUs/Timeline.png") no-repeat center;
          background-size: contain;
          width: 100%;
          height: 550px;
        }

        #aboutUsVisionMission{
          background-color:#eaf7ff;
        }

        #whyRxil .pagePadding{
          padding-left:5% !important;
          padding-right:5% !important;
        }

      `}</style>
    </div>
  );
}

if (process.browser) {
  // function to stick header

  // $(window).on("scroll", function () {
  //   var headerHeight = $(".header").height(),
  //     winscroll = $(window).scrollTop();
  //   // console.log('winscroll: ' + winscroll + ', headerheight: ' + headerHeight);
  //   if (winscroll > headerHeight) {
  //     $(".header").addClass("stickHeader");
  //     //console.log('inside winscroll ? headerHeight');
  //   } else {
  //     $(".header").removeClass("stickHeader");
  //     // console.log('else');
  //   }
  // });

  // function to show respective sections of Header
  $(document).on("click", ".menu a", function () {
    console.log("inside menu click");
    var getattr = $(this).attr("data-category");
    if (getattr == "aboutUs") {
      var targetscroll =
        $("#" + getattr).offset().top - ($(".header").outerHeight() - 90); // - 70;
    } else {
      var targetscroll =
        $("#" + getattr).offset().top - ($(".header").outerHeight() - 70); // - 70;
    }

    $("html, body").animate({
      scrollTop: targetscroll,
    });
    $(".menu a").removeClass("active");
    $(this).addClass("active");
  });

  //logo click event
  $(document).on("click", ".logo", function () {
    console.log("inside logo click");

    $("html, body").animate({
      scrollTop: 0,
    });
  });

  //script for benefits section

  $(document).on("mouseover", ".baseWrapper p", function () {
    console.log("inside menu click");

    // $(".baseWrapper p").removeClass("active"); to change color of text
    // $(this).addClass("active");

    var getattr = $(this).attr("data-content");
    $("#benefits").removeClass(
      "defaultBackground buyerBackground financiarBackground"
    );
    $("#benefits").addClass(getattr);

    $(".sliderText").hide();
    // $(".sliderText['data-text='"+getattr+"']'").show();
    $('.sliderText[data-text="' + getattr + '"]').show();
  });

  $(window).on("scroll", function () {
    var scrollpos = $(window).scrollTop();
    $("section.item").each(function () {
      var infinitetop = $(this).offset().top - $(window).height();
      var infinitebottom = infinitetop + $(this).outerHeight();
      if (scrollpos >= infinitetop && scrollpos <= infinitebottom) {
        var sectionId = $(this).attr("id");
        $(".header-left.menu a").removeClass("active");
        $('.header-left.menu a[data-category="' + sectionId + '"]').addClass(
          "active"
        );
      }
    });
  });

  $(document).ready(function () {
    $("body").css("padding-top", $(".header").outerHeight());
  });

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
