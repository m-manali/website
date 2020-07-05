import Head from "next/head";
import React from "react";
import $ from "jquery";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

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
      <section id="intro" className="container theme-widget item active">
        <div className="row">
          <div id="heroImage">
            <img src="/images/buyer/buyerhero.png" alt="" />
          </div>
           </div>
           <div className="row">
           <span className="sellerSpan" style={{"padding-left": "105px;","padding-top": "73px" ,"line-height": "1.7"}}>

            <p style={{ "font-size": "17px"}}>

             Manage your cashflows better while ensuring timely payment to your small
              <br/>business. If you are a corporate house procuring from MSMEs,your team's
              <br/>bandwidth would often be tied up with handling payment follow-ups and
              <br/>invoice status queries from supliers.
              <br/>
              <br/>Through RXIL TReDS,you can you're your team's bandwidth and ensure that
              <br/>all your MSMEvendors have access to a line of capital to receive early
              <br/>payments against their invoices.
               <br/>
               <br/>
            </p>
            </span>
            <span className="sellerSpanright" style={{"padding-left":"77px;" , "padding-top": "43px;"}}>
            <img src="/images/buyer/Group 25597.png" alt="" />
            </span>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div
          id="resources"
          className="text-center"
          style={{
            backgroundColor: "#FFFF",
            // paddingLeft: "570px",
            color: "#1C77B0",
          }}
        >
          <div className="resourcesHeading">
            <p>
              <h2 style={{"font-weight": "650"}}>Buyers benefits</h2>
            </p>
          </div>
          </div>


      </section>
      {/* Hero Secrtion Starts here*/}

      <section className="container theme-widget item heroImagebuyer">


      </section>

      {/* About us section starts here */}

      <section className="container theme-widget item active">
        <div className="heroImagesbuyer1">
          <div>
            <h5
              className="text-left partnerWithText"
              style={{

                color: "#1C77B0",
                "font-weight": "600",
                "padding-left": "290px",

                // paddingLeft: "180px;",
                // "font-size": "29px;",
              }}
            >

               Collaborate with us to manage your finances better.

            </h5>
            <br />
            <div className="partnerLine">
            <img

              src="./images/seller/Rectangle 11351.png"
              alt=""

            />
            </div>
            <br />

            <div style={{ "padding-left": "290px" }}>
              <Button className="buttoncls"
                data-category="btn:hover"
                style={{
                  color: "#FFFF",
                  width: "123px",
                  height: "44px",
                  backgroundColor:"#FF8B00",
                  "border-radius": "16px" ,

                }}
              >
                <strong>Registration</strong>
              </Button>
              <Button  className="buttoncls"
                data-category="btn:hover"
                style={{
                  color: "#FFFF",
                  width: "123px",
                  height: "44px",
                  backgroundColor:"#FF8B00",
                  "margin-left" : "15px",
                  "border-radius": "16px" ,

                }}
              >
                <strong>Contact Us</strong>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* About us section ends here */}

      {/* Who we are Section Starts here */}
      <section className="container theme-widget item">
      <div  style={{ "margin-top": "-372px" }}>

          <div
            id="resources"
            className="text-center"
            style={{
              backgroundColor: "#FFFF",
              // "padding-left": "598px;",
              color: "#1C77B0",
            }}
          >
            <div className="resourcesHeading">
              <p>
                <h2 style={{"font-weight": "650"}}>FAQ</h2>
              </p>
            </div>
          </div>
        </div>
        <div className="rowseller">
        <Accordion defaultActiveKey="0" id="buttonCollaps" style={{"margin-left": "156px","margin-top": "-30px"}}>"
            <Card >
              <Card.Header className="collaps">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {/* <img src="/images/seller/faq1.png"></img> */}
                <strong style={{ "font-size": "19px;",color:"#FFFF" }}>
                What is the meaning of Lorem Ipsum?
                <span style={{
                   "margin-left": "338px",
                   "font-size": "17px",
                   "margin-top": "-25px",
                   "font-weight": "900",
                }}>1</span>
              </strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0" className="border" style={{"border-radius": "19px",}}>
                <Card.Body > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <br/>
            <Card >
              <Card.Header className="collaps">
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <strong style={{ "font-size": "19px;",color:"#FFFF" }}>
                Why is Lorem Ipsum used?
                <span style={{
                   "margin-left": "427px",
                   "font-size": "17px",
                   "margin-top": "-25px",
                   "font-weight": "900",
                }}>2</span>
              </strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1" className="border" style={{"border-radius": "19px",}}>
                <Card.Body> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <br/>
            <Card >
              <Card.Header className="collaps">
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <strong style={{ "font-size": "19px;",color:"#FFFF" }}>
                What is the most used version?
                <span style={{
                   "margin-left": "395px",
                   "font-size": "17px",
                   "margin-top": "-25px",
                   "font-weight": "900",
                }}>3</span>
              </strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2" className="border" style={{"border-radius": "19px",}}>
                <Card.Body> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <br/>
            <Card >
              <Card.Header className="collaps">
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <strong style={{ "font-size": "19px;",color:"#FFFF" }}>
                What are the origins of Lorem Ipsum Dolor Sit?
                <span style={{
                   "margin-left": "271px",
                   "font-size": "17px",
                   "margin-top": "-25px",
                   "font-weight": "900",
                }}>4</span>
              </strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3" className="border" style={{"border-radius": "19px",}}>
                <Card.Body> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <br/>
            <Card >
              <Card.Header className="collaps">
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <strong style={{ "font-size": "19px;",color:"#FFFF" }}>
                What is the original text of Lorem Ipsum Dolor Sit Amet?
                <span style={{
                   "margin-left": "197px",
                   "font-size": "17px",
                   "margin-top": "-25px",
                   "font-weight": "900",
                }}>5</span>
              </strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4" className="border" style={{"border-radius": "19px",}}>
                <Card.Body> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
</div>
</section>

      {/* Testimonials Section Ends Here */}


      {/* Who we are section ENds here */}

      {/* Benefit Section starts here */}


      {/* Benefit Section ends here */}

      {/* News and Events Starts Here */}



      {/* News and Events Ends Here */}

      {/* Resources Section starts here */}



      {/* Resources Section ends here */}

      {/* Testimonials Section Starts here */}

      {/*  Promotors Section ends here*/}

      {/* Contact Us Section Starts Here */}

      <section id="contactUs" className="container theme-widget item" style={{ "margin-top": "-380px" }}>
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
        html {
          height: 100%;
        }

        .hide {
          display: none;
        }

        .header {
          overflow: hidden;
          padding: 15px 10px;
          background-color: #1c77b0;
        }

        .header .header-left a {
          float: left;
          color: white;
          text-align: center;
          padding: 12px;
          text-decoration: none;
          font-size: 16px;
          line-height: 25px;
          border-radius: 4px;
          font-weight: bold;
        }

        .header a.logo {
          font-size: 25px;
          font-weight: bold;
          float: left;
          margin-right: 20px;
        }

        .header a:hover {
          background-color: none;
          color: #ff8b00;
        }

        .header a.active {
          background-color: none;
          color: #ff8b00;
        }

        .header-left {
          float: left;
        }
        .buttoncls{
          background-color: "#FF8B00" !important,
          border-radius: "20px;"!important,
          font-size: "20px;" !important,
        }

        .header .login-strip {
          float: right;
          margin: 8px 0 0;
        }

        .login-strip a {
          display: inline-block;
          vertical-align: middle;
          color: white;
        }

        .login-strip a.register-btn {
          color: white;
          border: 2px solid white;
          padding: 2px 5px;
          border-radius: 5px;
          margin: 0 0 0 10px;
        }

        .header.stickHeader {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          background-color: #1c77b0;
          box-shadow: 0px 2px 2px #ccc;
          z-index: 100;
        }

        .theme-widget {
          padding: 70px 0px;
        }

        #intro {
          min-height: inherit;
          padding: 0px;
        }

        #intro .rhs-content {
          text-align: right;
          margin-top: -490px;
          margin-left: 650px;
        }

        #intro .rhs-content h2 {
          font-size: 42px;
          line-height: 56px;
          color: #1c77b0;
        }

        #intro .rhs-content h3 {
          font-size: 36px;
          line-height: 45px;
          color: #ff8b00;
        }

        #intro .column {
          float: left;
          width: 60%;
          padding: 0 20px;
        }

        #intro .column:first-of-type {
          width: 40%;
        }

        #intro:after {
          display: block;
          content: "";
          clear: both;
        }

        #intro .row:first-of-type {
          margin-left: -50px;
          margin-right: -50px;
        }

        #heroImageseller img {
          width: 100%;
          height: 90%;
          padding-top: 78px !important;

        }

        .container {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto;
          padding-left: 50px !important;
          padding-right: 50px !important;
        }

        .container:after {
          display: block;
          content: "";
          clear: both;
        }

        #aboutUs {
          background: url("/images/AboutUsBackground.png") no-repeat;
          background-size: cover;
        }

        .firstSLideAboutUs {
          background: url("/images/AboutUS1.png") no-repeat;
          width: 800px;
          height: 400px;
          margin: 0 auto;
        }

        .secondSLideAboutUs {
          background: url("/images/AboutUS2.png") no-repeat center bottom;
          width: auto;
          height: 280px;
          margin: 120px auto 0;
          background-size: contain;
        }

        .thirdSLideAboutUs {
          background: url("/images/AboutUS3.png") no-repeat;
          width: 800px;
          height: 400px;
          margin: 0 auto;
        }

        .firstSlideText {
          float: left;
        }

        .defaultBackground {
          background: url("/images/SellerNew.png") no-repeat left bottom;
          background-size: cover;
          width: 100% !important;
          height: 660px;
        }

        .buyerBackground {
          background: url("/images/BuyerNew.png") no-repeat left bottom;
          width: 100% !important;
          height: 660px;
          background-size: cover;
        }

        .financiarBackground {
          background: url("/images/FinanceNew.png") no-repeat left bottom;
          width: 100% !important;
          height: 660px;
          background-size: cover;
        }

        .sliderText p {
          margin-bottom: 0px;
        }

        .baseContent {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          padding: 70px 0px;
          color: #fff;
        }
        .baseWrapper {
          display: table;
          width: 100%;
          table-layout: fixed;
          height: 100%;
        }
        .baseWrapper p {
          display: table-cell;
          text-align: center;
          cursor: pointer;
          font-size: 25px;
          font-weight: bold;
          vertical-align: bottom;
        }

        #benefits {
          position: relative;
          transition: all 0.5s ease;
        }

        #testimonials {
          background: url("/images/RxilBackground.png") no-repeat;
          background-size: cover;
          min-height: inherit;
        }
        #newsEvents,
        #resources {
          background-color: #cbe1ef;
          height: auto !important;
          min-height: auto !important;
        }

        #newsEvents .card {
          border: none;
          text-align: center;
          margin: 0 20px;
          padding: 20px;
          background-color: lightgray;
          height: 250px;
          border-radius: 10px;
        }

        #newsEvents .card-body {
          position: absolute;
          bottom: -17px;
          left: 50%;
          margin-left: -60px;
          padding: 0px;
        }

        #newsEvents .card-body button {
          min-width: 120px;
        }

        #newsEvents .btn:hover {
          background-color: #ff8b00 !important;
        }

        #newsEvents .row {
          justify-content: center;
          display: flex;
        }

        #resources .btn:hover {
          background-color: #ff8b00 !important;
        }

        #resources .card {
          border: none;
          text-align: center;
          margin: 0 20px;
          padding: 20px;
          background-color: #c1c1c0;
          height: 250px;
          border-radius: 10px;
        }

        #resources .card-body {
          position: absolute;
          bottom: -17px;
          left: 50%;
          margin-left: -100px;
          padding: 0px;
        }

        #resources .card-body button {
          min-width: 200px;
        }

        #resources .row {
          justify-content: center;
          display: flex;
        }

        .footerLinks a {
          display: block;
          margin-bottom: 10px;
          padding-bottom: 10px;
          color: #333;
          border-bottom: 1px solid #333;
        }

        .footerLinks a:last-of-type {
          border-bottom: none;
        }
        #contactUs {
          background-color: #d0e4ec;

          min-height: inherit;
          background: url("/images/ContactUsBackground.png") no-repeat center
            center;
          background-size: cover;
        }
        .copyRightStrip {
          text-align: center;
          padding: 15px 10px;
          background-color: #afafaf;
        }

        .copyRightStrip p {
          margin-bottom: 0px;
          color: #fff;
        }

        #resources .resourcesHeading p {
          color: #1C77B0;
          position: relative;
          margin-left: 35px;
          display: inline-block;
        }

        #newsEvents .newsEventsHeading p,
        #promoters .newsEventsHeading p,
        #testimonials .testimonialsHeading p {
          color: #ff8b00;
          position: relative;
          margin-left: 35px;
          display: inline-block;
        }

        #newsEvents .newsEventsHeading p:after,
        #promoters .newsEventsHeading p:after,
        #testimonials .testimonialsHeading p:after,
        #resources .resourcesHeading p:after {
          display: block;
          content: "";
          position: absolute;
          width: 20px;
          height: 2px;
          background: #1C77B0;
          top: 16px;
          left: -25px;
        }

        .sliderText {
          margin-left: 10px;
        }

        .promoterImage {
          margin-top: 20px;
          padding: 0 50px;
          display: table;
          width: 100%;
        }
        .promoterImage a {
          display: table-cell;
          padding: 0 35px;
          table-layout: fixed;
        }

        .promoterImage a img {
          width: 100%;
        }

        section#promoters {
          min-height: auto;
        }

        section {
          min-height: 100vh;
        }

        #aboutUs img {
          height: 600px;
          width: 108%;
          margin-top: -60px;
          margin-left: -40px;
          margin-right: 90px;
        }

        #testimonials .card-img-top {
          margin-left: 0px;
          margin-top: 5px;
          width: 30% !important;
        }

        #testimonials .row {
          justify-content: center;
          display: flex;
        }

        #testimonials .col {
          padding-left: 70px;
        }

        .testimonialComma1 {
          background: url("/images/TestimonialsComma.png") no-repeat;
          margin-top: -20px;
          margin-left: -21px;
        }

        #testimonials .card {
          text-align: center;
          margin: 0 20px;
          padding: 20px;
          background-color: #fff;
          height: 350px;
          border-radius: 10px;
        }

        #testimonials .card-body {
          position: absolute;
          bottom: 0pxpx;
          left: 50%;
          margin-left: -205px;
          padding: 15px;
        }

        .line {
          height: 2px;
          border-width: 0;
          color: gray;
          background-color: gray;
        }

        .aboutUsSecond {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10vmin;
          overflow: hidden;
        }
        .aboutUsSecond .card {
          flex: 1;
          transition: all 1s ease-in-out;
          height: 75vmin;
          position: relative;
          box-shadow: inset 8px 0 6px -6px #999;
          background: none;
          overflow: hidden;
          border: none;
          border-radius: 0px;
        }
        .aboutUsSecond .card .card__head {
          color: #1c77b0;
          background: #fff;
          padding: 0.5em;
          transform: rotate(-90deg);
          transform-origin: 0% 0%;
          transition: all 0.5s ease-in-out;
          min-width: 100%;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 1em;
          white-space: nowrap;
          box-shadow: 0 0 5px #333;
          border-radius: 0px 0px 10px 10px;
          font-weight: bold;
        }
        .aboutUsSecond .card:hover {
          flex-grow: 10;
        }

        .aboutUsSecond .card:hover img {
          filter: grayscale(0);
        }
        .aboutUsSecond .card:hover .card__head {
          text-align: center;

          color: #fff;
          background: #1c77b0;
          font-size: 2em;
          transform: rotate(0deg);
          border-radius: 0;
          vertical-align: middle;
        }

        .aboutUsSecond .card:hover .aboutUsKnowMore {
          display: block;
        }

        .aboutUsSecond .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 1s ease-in-out;
          filter: grayscale(100%);
        }
        .aboutUsSecond .card:not(:nth-child(5)) {
          margin-right: 1em;
        }

        .aboutUsKnowMore {
          display: none;
          margin-top: 20px;
          font-weight: bold;
        }

        .aboutUsSecond:hover .card p {
          display: none;
        }

        .aboutUsSecond .card:hover p {
          display: block;
        }

        html {
          scroll-behavior: smooth;
        }

        .aboutUsFirst {
          position: relative;
          background: url("/images/WhatIsTredsAndWhy.png") no-repeat center top;
          width: 100%;
          height: 350px;
          background-size: contain;
        }

        .aboutUsFirst p {
          position: absolute;
          bottom: -110px;
          right: 20px;
          display: block;
        }

        .aboutUsSecond .card:hover .aboutUsFirst,
        .aboutUsSecond .card:hover .aboutUsSecondStyle,
        .aboutUsSecond .card:hover .aboutUsThirdStyle {
          background-position: 25px top;
          height: 405px;
        }

        .aboutUsSecond .card:hover .aboutUsFirst p {
          font-size: 20px;
          bottom: 130px;
          right: 150px;
        }

        .aboutUsSecondStyle {
          position: relative;
          background: url("/images/HowItWorks.png") no-repeat center top;
          width: 100%;

          height: 320px;
          background-size: contain;
          background-position: 50px 0px;
        }

        .aboutUsSecondStyle p {
          position: absolute;
          bottom: -140px;
          right: 20px;
          max-width: 280px;
          display: block;
        }

        .aboutUsSecond .card:hover .aboutUsSecondStyle p {
          font-size: 20px;
          bottom: 100px;
          right: 150px;
        }

        .aboutUsThirdStyle {
          background: url("/images/Factoring.png") no-repeat center top;
          width: 100%;
          height: 320px;
          background-size: contain;
          position: relative;
          background-position: 50px 0px;
        }

        .aboutUsThirdStyle p {
          position: absolute;
          bottom: -140px;
          right: 20px;
          max-width: 280px;
          display: block;
        }

        .aboutUsSecond .card:hover .aboutUsThirdStyle p {
          font-size: 20px;
          bottom: 100px;
          right: 150px;
        }

        #whoWeAre {
          background-color: #f5f5f5;
        }

        #whoWeAre .carousel-control-next-icon {
          background: url("/images/RightArrow.png") no-repeat !important;
          height: 51px;
          width: 86px;
          bottom: 50px;
          position: absolute;
        }

        #whoWeAre .carousel-control-prev-icon {
          background: url("/images/LeftArrow.png") no-repeat !important;
          height: 51px;
          width: 86px;
          bottom: 50px;
          position: absolute;
        }

        #whoWeAre .carousel-control-prev {
          right: 65% !important;
          left: inherit !important;
        }

        #whoWeAre .carousel-control-next {
          right: 55% !important;
          top: inherit;
        }

        #whoWeAre .carousel-control-prev {
          top: inherit;
        }

        #whoWeAre .col-md-7 .carousel-control-next-icon {
          background-image: none !important;
          height: 20px !important;
          width: 20px !important;
          bottom: inherit !important;
          position: static !important;
        }

        #whoWeAre .col-md-7 .carousel-control-next {
          right: 0 !important;
        }

        #whoWeAre .whoWeAreFirst {
          padding: 10px 0px;
        }

        #whoWeAre .whoWeAreFirstInner {
          width: 100%;
          box-shadow: 0px 0px 5px #333;
          display: block;
          height: 491px;
        }

        #whoWeAre .whoWeAreSecondInner {
          width: 100%;
          box-shadow: 0px 0px 5px #333;
          display: block;
          height: 491px;
        }

        #whoWeAre .whoWeAreThirdInner {
          width: 100%;
          box-shadow: 0px 0px 5px #333;
          display: block;
          height: 491px;
        }

        #whoWeAre .whoWeAreFourthInner {
          width: 100%;
          box-shadow: 0px 0px 5px #333;
          display: block;
          height: 491px;
        }

        #whoWeAre .card-img-top {
          width: 80%;
          padding-top: 10px;
        }

        #whoWeAre .carousel-inner {
          height: 510px;
        }

        #whoWeAre .boardOfDirectors {
          text-align: center;
          background: none;
        }

        .readMore {
          display: block;
          width: 23px;
          height: 23px;
          margin: 0 auto;
          border: 1px solid #fff;
          font-size: 25px;
          line-height: 15px;
          border-radius: 50%;
          transition: all 0.2s linear;
          overflow: hidden;
          text-align: center;
          padding-left: 1px;
        }

        .readMore:hover {
          width: 100px;
          border-radius: 15px;
        }

        .hoverReadmore {
          font-size: 13px;
          font-weight: normal;
          vertical-align: middle;
          margin: -4px 0 0 5px;
        }

        .readMore:hover .hoverReadmore {
          display: inline-block;
        }

        body .carousel-indicators {
          bottom: -45px;
        }

        body .carousel-indicators li {
          background-color: #1c77b0;
          opacity: 1;
        }

        body .carousel-indicators li.active,
        body .col-md-7 .carousel-indicators li.active {
          background-color: #ff8b00;
        }

        body .col-md-7 .carousel-indicators li {
          background-color: #707070;
        }

        body #whoWeAre .col-md-7 .carousel-inner {
          height: inherit;
        }

        body #whoWeAre .col-md-7 .carousel-control-prev {
          display: none;
        }

        .boardOfDirectorInnerClass {
          background-color: #cbe1ef;
          height: 491px;
          box-shadow: 0px 0px 5px #333;
          margin: 10px 0;
        }

        .boardOfDirectorInnerClass .card {
          background: none;
          border: none;
        }

        .socialShare a {
          display: block;
          float: left;
          margin-right: 25px;
        }

        .socialShare:after {
          display: block;
          content: "";
          clear: both;
        }

        .copyRight {
          text-align: center;
          background-color: #afafaf;
          color: #fff;
          padding: 10px 0px;
        }

        .copyRight p {
          margin-bottom: 0;
        }

        .newsLetter {
          position: relative;
          display: inline-block;
        }

        .newsLetter input {
          border: 1px solid #1c77b0;
          padding: 10px 40px 10px 10px;
        }

        .newsLetter button {
          background-color: #1c77b0;
          color: #fff;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          box-shadow: none;
          border: none;
          outline: none;
          width: 46px;
        }

        @media screen and (max-width: 500px) {
          .header a {
            float: none;
            display: block;
            text-align: left;
          }
          .header-left {
            float: none;
          }
        }

        .heroImageseller {
          background: url("/images/seller/Group 25665.png") no-repeat center
            bottom !important;
          background-size: cover !important;
          height: 795px !important;
        }
        .heroImagebuyer {
          background: url("/images/buyer/Group 25667.png") no-repeat center
            bottom !important;
          background-size: cover !important;
          height: 795px !important;
        }
        .heroImagefinancier {
          background: url("/images/financier/Group 25671.png") no-repeat center
            bottom !important;
          background-size: cover !important;
          height: 795px !important;
        }
        .heroImageaboutusmain {
          background: url("/images/aboutUs/aboutmain.png") no-repeat !important;
          background-size: cover !important;
          height: 900px !important;
        }
        .heroImageaboutusmain1 {
          background: url("/images/aboutUs/Group 25647.png") no-repeat !important;
          background-size: cover !important;
          height: 791px !important;
        }
        .heroImageseller1 {
          background: url("/images/seller/Group 25666modifiedseller.png")
            no-repeat !important;
          background-size: cover !important;
          height: 440px !important;
          margin-top: -166px !important;
          padding-top: 138px !important;
          margin-left: -49px !important;
          margin-right: -49px !important;
        }
        .heroImagesbuyer1 {
          background: url("/images/buyer/modifiedfinancier.png") no-repeat !important;
          background-size: cover !important;
          height: 440px !important;
          margin-top: -166px !important;
          padding-top: 138px !important;
          margin-left: -49px !important;
          margin-right: -49px !important;
        }
        .buttonseller {
          background-color: #ff8b00 !important;

          width: 149px !important;
          height: 57px !important;
        }

        .heroImagesfinancier1 {
          background: url("/images/financier/Group 25667modified.png") no-repeat !important;
          background-size: cover !important;
          height: 440px !important;
          margin-top: -166px !important;
          padding-top: 138px !important;
          margin-left: -49px !important;
          margin-right: -49px !important;
        }
        body #buttonCollaps .card-header {
          background-color: #278bcb !important;
          color: #fff !important;
          cursor: pointer !important;
          padding: 24px !important;
          width: 900px !important;
          border: none !important;
          text-align: left !important;
          outline: none !important;
          border-radius: 15px !important;
          height: 60px !important;
          font-size: 15px !important;
          font: bold !important;
        }

        .collaps.active,
        .collaps:hover {
          background-color: #ff8b00 !important;
        }

        .contentcoll {
          padding: 0 18px !important;
          display: none !important;
          overflow: hidden !important;
          background-color: #ffff !important;
          width: 900px !important;
          border: solid 1px !important;
          border-radius: 1px !important;
        }

        #sellerImage img {
          width: 20% !important;
          height: 90% !important;
        }
        .rowseller {
          margin-left: 233px !important;
          margin-right: -50px !important;
          margin-top: 50px !important;
        }

        .sellerSpan {
          text-align: left !important;
          padding-left: 83px !important;
          padding-top: 37px !important;
          font-weight:600;


        }
        .sellerSpanright {
          text-align: right !important;
          width: 10% !important;
          height: 60% !important;
          padding-top: 43px;
          padding-left: 77px;
        }
        .newsEventsHeadingSeller {
          color: #1c77b0 !important;
          position: relative !important;
          margin-left: 493px !important;
        }

        .Sellerfooter {
          width: 285px !important;
          height: 55px !important;
        }
        .buttonSeller {
          background-color: #ff8b00 !important;
        }

        .faqfooter {
          width: 285px !important;
          height: 55px !important;
          padding-left: 60px !important;
          margin-left: -59px !important;
          margin-top: -94px !important;
        }

        .partnerWithText{
          font-size:29px;
        }
        .partnerLine{
          padding-left:296px;
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
    if(getattr == 'aboutUs'){
     var targetscroll = $("#" + getattr).offset().top - ($('.header').outerHeight() - 90);// - 70;
    }else{
      var targetscroll = $("#" + getattr).offset().top - ($('.header').outerHeight() - 70);// - 70;
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

  $(document).ready(function(){
    $('body').css("padding-top",$('.header').outerHeight());
  });
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classNameList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

}
