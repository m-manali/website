import Head from "next/head";
import React from "react";
import $ from "jquery";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Receivables Exchange of India Ltd :</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Secrtion Starts here*/}

      <div class="header stickHeader">
        <div class="container">
          <a href="#default" class="logo">
            <img
              src="/images/RxilIconBlue.png"
              alt=""
              width="150"
              height="50"
            />
          </a>
          <div class="header-left menu">
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
          <div class="login-strip">
            <a href="https://www.treds.in/rest/login" target="_blank">
              Login
            </a>
            <a
              class="register-btn"
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
      <section id="intro" class="container theme-widget item active">
        <div class="row">
          <div id="heroImage">
            <img src="/images/HeroImage1.png" alt="" />
          </div>

          <div class="rhs-content">
            <h2>
              <strong>Transforming Access to Capital</strong>
            </h2>
            <h3>
              Facilitating digital and
              <br /> paperless financing using
              <br /> an auction-based price discovery
            </h3>
          </div>
        </div>
      </section>
      {/* Hero Secrtion Starts here*/}

      {/* About us section starts here */}

      <section id="aboutUs" class="container theme-widget item">
        <div class="aboutUsSecond">
          <div class="card">
            <div class="aboutUsFirst">
              {/* <img src="/images/WhatIsTredsAndWhy.png" /> */}
              <p>
                TReDS is an online platform
                <br />
                facilitating access to credit by <br />
                financing trade receivables of MSMEs
                <br /> through multiple financiers.{" "}
                <a
                  href="#"
                  style={{ color: "#FF8B00" }}
                  class="aboutUsKnowMore"
                >
                  Know More ...
                </a>
              </p>
            </div>
            <div class="card__head">What is TReDS and Why?</div>
          </div>
          <div class="card">
            <div class="aboutUsSecondStyle">
              {/* <img src="./images/HowItWorks.png" /> */}
              <p>
                RXIL has reimagined access to capital <br />
                for small businesses <br /> through its TReDS platform. <br />{" "}
                With an entirely digital process right from onboarding.
                <a
                  href="#"
                  style={{ color: "#FF8B00" }}
                  class="aboutUsKnowMore"
                >
                  Know More ...
                </a>
              </p>
            </div>
            <div class="card__head">How it works?</div>
          </div>
          <div class="card">
            <div class="aboutUsThirdStyle">
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG" /> */}
              <p>
                RXIL has reimagined access to <br /> capital for small
                businesses <br /> through its TReDS platform. <br /> With an
                entirely digital process right from onboarding.
                <a
                  href="#"
                  style={{ color: "#FF8B00" }}
                  class="aboutUsKnowMore"
                >
                  Know More ...
                </a>
              </p>
            </div>
            <div class="card__head">Factoring and Reverse Factoring</div>
          </div>
        </div>
      </section>

      {/* About us section ends here */}

      {/* Who we are Section Starts here */}

      <section id="whoWeAre" class="container theme-widget item">
        <Carousel wrap="FALSE" id="whoWeAreCaraousel">
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={5}>
                  <div>
                    <h3 style={{ color: "#1C77B0" }}>Who We Are</h3>
                    <p>
                      RXIL, a join venture promoted by Small Industries
                      Development Bank of India (SIDBI) and the National Stock
                      Exchange of India Limited (NSE), empowers business to
                      realize their growth potentials by facilitating access to
                      capital at competetive rates, in less than 48 hours.
                    </p>
                    {/* <a style={{ color: "#FF8B00" }}>
                      <strong>Know More</strong>
                    </a> */}

                    <Link
                      href={{
                        pathname: "/aboutUsNew",
                      }}
                    >
                      <a style={{ color: "#FF8B00" }}>
                        <span>
                          <strong>Know More</strong>
                        </span>{" "}
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col md={7}>
                  <div class="whoWeAreFirst">
                    <img
                      class="whoWeAreFirstInner"
                      src="/images/WhoWeAreFirstInner.png"
                    ></img>

                    {/* <img
                      class="arrowImage"
                      src="/images/LeftArrow.png"
                    ></img> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={5}>
                  <div>
                    <h3 style={{ color: "#1C77B0" }}>History and Milestones</h3>
                    <p>
                      Receivables Exchange of India Ltd.(RXIL) incorporated as a
                      public limited company under the Companies Act, 2013 in
                      Feb 2016
                    </p>
                    <a style={{ color: "#FF8B00" }}>
                      <strong>Know More</strong>
                    </a>
                  </div>
                </Col>
                <Col md={7}>
                  <div class="whoWeAreFirst">
                    <img
                      class="whoWeAreSecondInner"
                      src="/images/WhoWeAreSecondInner.png"
                    ></img>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={5}>
                  <div>
                    <h3 style={{ color: "#1C77B0" }}>Culture</h3>
                    <p>
                      As India's first TReDS Exchange platform, We are commited
                      to revolutionizing the way small business funds their
                      growth. We are a diverse, young and close-knit team
                      committed to empowering MSMEs with access to capital.
                    </p>
                    <a style={{ color: "#FF8B00" }}>
                      <strong>Know More</strong>
                    </a>
                  </div>
                </Col>
                <Col md={7}>
                  <div class="whoWeAreFirst">
                    <img
                      class="whoWeAreThirdInner"
                      src="/images/WhoWeAreThirdInner.png"
                    ></img>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={5}>
                  <div>
                    <h3 style={{ color: "#1C77B0" }}>
                      Promoters and Shareholders
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in.
                    </p>
                    <a style={{ color: "#FF8B00" }}>
                      <strong>Know More</strong>
                    </a>
                  </div>
                </Col>
                <Col md={7}>
                  <div class="whoWeAreFirst">
                    <img
                      class="whoWeAreFourthInner"
                      src="/images/WhoWeAreFourthInner.png"
                    ></img>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={5}>
                  <div>
                    <h3 style={{ color: "#1C77B0" }}>Board of Directors</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in.
                    </p>
                    <a style={{ color: "#FF8B00" }}>
                      <strong>Know More</strong>
                    </a>
                  </div>
                </Col>
                <Col md={7}>
                  <div class="whoWeAreFirst boardOfDirectorInnerClass">
                    <Carousel controls="false">
                      <Carousel.Item>
                        <Container>
                          <Row>
                            <Col>
                              <Card>
                                <div class="boardOfDirectors">
                                  <Card.Img
                                    variant="top"
                                    src="/images/Board1.png"
                                  />
                                  <Card.Body>
                                    <Card.Title style={{ color: "#FF8B00" }}>
                                      Mr. Mohammad Mustafa
                                    </Card.Title>
                                  </Card.Body>
                                </div>
                              </Card>
                            </Col>
                            <Col>
                              <Card>
                                <div class="boardOfDirectors">
                                  <Card.Img
                                    variant="top"
                                    src="/images/Board2.png"
                                  />
                                  <Card.Body>
                                    <Card.Title style={{ color: "#FF8B00" }}>
                                      Mr. Mukesh Agarwal
                                    </Card.Title>
                                  </Card.Body>
                                </div>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Container>
                          <Row>
                            <Col>
                              <Card>
                                <div class="boardOfDirectors">
                                  <Card.Img
                                    variant="top"
                                    src="/images/Board1.png"
                                  />
                                  <Card.Body>
                                    <Card.Title style={{ color: "#FF8B00" }}>
                                      Mr. Mohammad Mustafa
                                    </Card.Title>
                                  </Card.Body>
                                </div>
                              </Card>
                            </Col>
                            <Col>
                              <Card>
                                <div class="boardOfDirectors">
                                  <Card.Img
                                    variant="top"
                                    src="/images/Board2.png"
                                  />
                                  <Card.Body>
                                    <Card.Title style={{ color: "#FF8B00" }}>
                                      Mr. Mukesh Agarwal
                                    </Card.Title>
                                  </Card.Body>
                                </div>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Who we are section ENds here */}

      {/* Benefit Section starts here */}

      <section
        id="benefits"
        class="container theme-widget defaultBackground item"
      >
        <div class="baseContent">
          <div class="baseWrapper">
            <p data-content="defaultBackground">
              Seller{" "}
              <Link
                href={{
                  pathname: "/seLLer",
                }}
              >
                <a>
                  <span class="readMore">
                    +<span class="hoverReadmore">Read More</span>
                  </span>{" "}
                </a>
              </Link>
            </p>
            <p data-content="buyerBackground">
              Buyer{" "}
              <Link
                href={{
                  pathname: "/buYer",
                }}
              >
                <a>
                  <span class="readMore">
                    +<span class="hoverReadmore">Read More</span>
                  </span>{" "}
                </a>
              </Link>
            </p>
            <p data-content="financiarBackground">
              Financiers{" "}
              <Link
                href={{
                  pathname: "/finanCier",
                }}
              >
                <a>
                  <span class="readMore">
                    +<span class="hoverReadmore">Read More</span>
                  </span>{" "}
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div id="seller" data-text="defaultBackground" class="sliderText">
          <h2 style={{ color: "#FF8B00" }}>Benefits to Seller</h2>
          <p>Quicker payments</p>
          <p>No course borrowing</p>
          <p>Lower cost of funds</p>
          <p>Multiple financiers</p>
        </div>
        <div id="buyer" class="hide sliderText" data-text="buyerBackground">
          <h2 style={{ color: "#FF8B00" }}>Benefits to Buyer</h2>
          <p>Improved cash flows</p>
          <p>Seamless ERP Integration</p>
          <p>Strengthen supplier relationships</p>
          <p>Enhanced procurement terms</p>
        </div>
        <div
          id="financier"
          class="hide sliderText"
          data-text="financiarBackground"
        >
          <h2 style={{ color: "#FF8B00" }}>Benefits to Financier</h2>
          <p>Priority Sector Lending(PSL) Benefits</p>
          <p>Low risk of default</p>
          <p>Access to quality customers</p>
          <p>Automated reconciliation</p>
        </div>
      </section>

      {/* Benefit Section ends here */}

      {/* News and Events Starts Here */}

      <section id="newsEvents" class="container theme-widget item">
        <div class="newsEventsHeading">
          <p>
            <h3>
              <strong> News & Events</strong>
            </h3>
          </p>
        </div>
        <div class="row">
          <div class="column">
            <Card style={{ width: "340px" }}>
              <Card.Img variant="top" src="/images/NewsIcon.png" />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text> */}
                <Button variant="primary">News</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="column">
            <Card style={{ width: "340px" }}>
              <Card.Img variant="top" src="/images/PressReleaseIcon.png" />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text> */}
                <Button variant="primary">Press Release</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="column">
            <Card style={{ width: "340px" }}>
              <Card.Img variant="top" src="/images/Webinar.png" />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text> */}
                <Button variant="primary">Webinars</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* News and Events Ends Here */}

      {/* Resources Section starts here */}

      <section id="resources" class="container theme-widget item">
        <div class="resourcesHeading">
          <p>
            <h3>
              <strong>Resources</strong>
            </h3>
          </p>
        </div>

        <div class="row">
          <div class="column">
            <Card style={{ width: "340px" }}>
              <Card.Img
                style={{ width: "260px" }}
                variant="top"
                src="/images/FAQImage.png"
              />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text> */}
                <Button variant="primary">FAQ</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="column">
            <Card style={{ width: "340px" }}>
              <Card.Img variant="top" src="/images/CircularImage.png" />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text> */}
                <Button variant="primary">Circulars & Notifications</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="column">
            <Card style={{ width: "340px" }}>
              <Card.Img
                variant="top"
                src="/images/Blog.png"
                style={{ width: "210px" }}
              />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text> */}
                <Link
                  href={{
                    pathname: "/blog-home",
                  }}
                >
                  <Button variant="primary">Blog</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section ends here */}

      {/* Testimonials Section Starts here */}
      <section id="testimonials" class="container theme-widget item">
        <div class="testimonialsHeading">
          <p>
            <h3>
              <strong>Testimonials</strong>
            </h3>
          </p>
        </div>

        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <Card style={{ width: "420px" }}>
                    <div class="testimonialComma1">
                      <Card.Img variant="top" src="/images/Testimonials.png" />
                      <Card.Body>
                        <Card.Text>
                          Registering with RXIL has been a great experience as
                          the process was fast, errorless and hassle-free. The
                          executives were efficient in promptly handling
                          everything from documentation to service our best
                          queries. The RXIL-TReDS platform is one of the best as
                          we receive the lowest interest cost for discounting.
                        </Card.Text>
                        <Card.Title style={{ color: "#FF8B00" }}>
                          Swapnil Auto Engineering
                        </Card.Title>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "420px" }}>
                    <div class="testimonialComma1">
                      <Card.Img variant="top" src="/images/Testimonials.png" />
                      <Card.Body>
                        <Card.Text>
                          Registering with RXIL has been a great experience as
                          the process was fast, errorless and hassle-free. The
                          executives were efficient in promptly handling
                          everything from documentation to service our best
                          queries. The RXIL-TReDS platform is one of the best as
                          we receive the lowest interest cost for discounting.
                        </Card.Text>
                        <Card.Title style={{ color: "#FF8B00" }}>
                          Swapnil Auto Engineering
                        </Card.Title>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Testimonials Section Ends Here */}

      {/* Promoters Section Starts here */}
      <section id="promoters" class="container theme-widget item">
        <div class="newsEventsHeading">
          <p>
            <h3>
              <strong> Promoters & Shareholders</strong>
            </h3>
          </p>
        </div>

        <div class="promoterImage">
          {/* <img src="/images/Promoters.png" alt="" /> */}

          <a href="#">
            <img src="/images/Promotor1.png"></img>
          </a>
          <a href="#">
            <img src="/images/Promotor2.png"></img>
          </a>
          <a href="#">
            <img src="/images/Promotor3.png"></img>
          </a>
          <a href="#">
            <img src="/images/Promotor4.png"></img>
          </a>
          <a href="#">
            <img src="/images/Promotor5.png"></img>
          </a>
        </div>
      </section>
      {/*  Promotors Section ends here*/}

      {/* Contact Us Section Starts Here */}

      <section id="contactUs" class="container theme-widget item">
        <Container>
          <Row>
            <Col>
              <div class="footerImageColl1">
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
              <div class="footerTextColl1">
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
              <div class="footerLinks">
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
              <div class="newsLetter">
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
                <p class="socialShare">
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
      <div class="copyRight">
        <p>
          <span>&#169;</span> 2020 Receivables Exchange of India Limited. All
          rights reserved.
        </p>
      </div>
      {/* Contact Us Section Ends Here */}
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
    } else if (getattr == "benefits") {
      var targetscroll =
        $("#" + getattr).offset().top - ($(".header").outerHeight() - 15); // - 70;
    } else if (getattr == "whoWeAre") {
      var targetscroll =
        $("#" + getattr).offset().top - ($(".header").outerHeight() - 55); // - 70;
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
      console.log("outside if");
      if (scrollpos >= infinitetop && scrollpos <= infinitebottom) {
        var sectionId = $(this).attr("id");
        console.log("inside first if");
        if (typeof sectionId != "undefined") {
          $(".header-left.menu a").removeClass("active");
          console.log("SectionID - " + sectionId);
          $('.header-left.menu a[data-category="' + sectionId + '"]').addClass(
            "active"
          );
        }
      } else if (scrollpos == 0) {
        $(".header-left.menu a").removeClass("active");
      }
    });
  });

  $(document).ready(function () {
    $("body").css("padding-top", $(".header").outerHeight());
  });

  //adjust intro height on load
  $(document).ready(function () {
    $("section#intro").css(
      "height",
      $("section#intro").outerHeight() - $(".header").outerHeight()
    );

    $(document).on("click", ".card-header", function () {
      if (!$(this).hasClass("open")) {
        $(".collaps.card-header").removeClass("open");
        $(this).addClass("open");
      } else {
        $(".collaps.card-header").removeClass("open");
      }
    });
  });
}
