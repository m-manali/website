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
// import Collapsible from 'react-collapsible';

export default function BlogHome() {
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
      {/* Blog Section starts here */}
      <div className="heroBlogImage">
        <img
          className="blogHeaderImage"
          src="/images/blogs/BlogHeroImage.png"
        ></img>
      </div>
      <section id="blogs">
        <div className="blog-container">
          <aside className="blog-lhs">
            <figure>
              <div className="blog-details">
                <p className="blog-date">13 May 2020</p>
                <p className="blog-img">
                  <img src="/images/blogs/BlogThumbnail.png" />
                </p>
              </div>
              <figcaption>
                <h2>
                  How companies are levereging technology to ease MSME financing
                </h2>
                <p className="blog-author">
                  <strong>Author: </strong>Author Name | <a href="#">Finance</a>
                </p>
                <p>
                  Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum. Lorem Ipsum
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
                  IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum
                </p>
                <div className="blog-more">
                  <div className="more-lhs">
                    <p>
                      <span>
                        <img src="/images/blogs/BlogViews.png" />
                      </span>
                      <span>20</span>
                    </p>
                    <p>
                      <span>
                        <img src="/images/blogs/BlogComments.png" />
                      </span>
                      <span>5</span>
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: "/blog-child",
                    }}
                  >
                    <a href="#" className="blog-readmore">
                      Read More...
                    </a>
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure>
              <div className="blog-details">
                <p className="blog-date">13 May 2020</p>
                <p className="blog-img">
                  <img src="/images/blogs/BlogThumbnail.png" />
                </p>
              </div>
              <figcaption>
                <h2>
                  How companies are levereging technology to ease MSME financing
                </h2>
                <p className="blog-author">
                  <strong>Author: </strong>Author Name | <a href="#">Finance</a>
                </p>
                <p>
                  Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum. Lorem Ipsum
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
                  IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum
                </p>
                <div className="blog-more">
                  <div className="more-lhs">
                    <p>
                      <span>
                        <img src="/images/blogs/BlogViews.png" />
                      </span>
                      <span>20</span>
                    </p>
                    <p>
                      <span>
                        <img src="/images/blogs/BlogComments.png" />
                      </span>
                      <span>5</span>
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: "/blog-child",
                    }}
                  >
                    <a href="#" className="blog-readmore">
                      Read More...
                    </a>
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure>
              <div className="blog-details">
                <p className="blog-date">13 May 2020</p>
                <p className="blog-img">
                  <img src="/images/blogs/BlogThumbnail.png" />
                </p>
              </div>
              <figcaption>
                <h2>
                  How companies are levereging technology to ease MSME financing
                </h2>
                <p className="blog-author">
                  <strong>Author: </strong>Author Name | <a href="#">Finance</a>
                </p>
                <p>
                  Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum. Lorem Ipsum
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
                  IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum
                </p>
                <div className="blog-more">
                  <div className="more-lhs">
                    <p>
                      <span>
                        <img src="/images/blogs/BlogViews.png" />
                      </span>
                      <span>20</span>
                    </p>
                    <p>
                      <span>
                        <img src="/images/blogs/BlogComments.png" />
                      </span>
                      <span>5</span>
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: "/blog-child",
                    }}
                  >
                    <a href="#" className="blog-readmore">
                      Read More...
                    </a>
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure>
              <div className="blog-details">
                <p className="blog-date">13 May 2020</p>
                <p className="blog-img">
                  <img src="/images/blogs/BlogThumbnail.png" />
                </p>
              </div>
              <figcaption>
                <h2>
                  How companies are levereging technology to ease MSME financing
                </h2>
                <p className="blog-author">
                  <strong>Author: </strong>Author Name | <a href="#">Finance</a>
                </p>
                <p>
                  Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum. Lorem Ipsum
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
                  IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum
                </p>
                <div className="blog-more">
                  <div className="more-lhs">
                    <p>
                      <span>
                        <img src="/images/blogs/BlogViews.png" />
                      </span>
                      <span>20</span>
                    </p>
                    <p>
                      <span>
                        <img src="/images/blogs/BlogComments.png" />
                      </span>
                      <span>5</span>
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: "/blog-child",
                    }}
                  >
                    <a href="#" className="blog-readmore">
                      Read More...
                    </a>
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure>
              <div className="blog-details">
                <p className="blog-date">13 May 2020</p>
                <p className="blog-img">
                  <img src="/images/blogs/BlogThumbnail.png" />
                </p>
              </div>
              <figcaption>
                <h2>
                  How companies are levereging technology to ease MSME financing
                </h2>
                <p className="blog-author">
                  <strong>Author: </strong>Author Name | <a href="#">Finance</a>
                </p>
                <p>
                  Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum. Lorem Ipsum
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
                  IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum
                </p>
                <div className="blog-more">
                  <div className="more-lhs">
                    <p>
                      <span>
                        <img src="/images/blogs/BlogViews.png" />
                      </span>
                      <span>20</span>
                    </p>
                    <p>
                      <span>
                        <img src="/images/blogs/BlogComments.png" />
                      </span>
                      <span>5</span>
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: "/blog-child",
                    }}
                  >
                    <a href="#" className="blog-readmore">
                      Read More...
                    </a>
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure>
              <div className="blog-details">
                <p className="blog-date">13 May 2020</p>
                <p className="blog-img">
                  <img src="/images/blogs/BlogThumbnail.png" />
                </p>
              </div>
              <figcaption>
                <h2>
                  How companies are levereging technology to ease MSME financing
                </h2>
                <p className="blog-author">
                  <strong>Author: </strong>Author Name | <a href="#">Finance</a>
                </p>
                <p>
                  Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum. Lorem Ipsum
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
                  IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum
                </p>
                <div className="blog-more">
                  <div className="more-lhs">
                    <p>
                      <span>
                        <img src="/images/blogs/BlogViews.png" />
                      </span>
                      <span>20</span>
                    </p>
                    <p>
                      <span>
                        <img src="/images/blogs/BlogComments.png" />
                      </span>
                      <span>5</span>
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: "/blog-child",
                    }}
                  >
                    <a href="#" className="blog-readmore">
                      Read More...
                    </a>
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure>
              <div className="blog-details">
                <p className="blog-date">13 May 2020</p>
                <p className="blog-img">
                  <img src="/images/blogs/BlogThumbnail.png" />
                </p>
              </div>
              <figcaption>
                <h2>
                  How companies are levereging technology to ease MSME financing
                </h2>
                <p className="blog-author">
                  <strong>Author: </strong>Author Name | <a href="#">Finance</a>
                </p>
                <p>
                  Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum. Lorem Ipsum
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
                  IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum
                </p>
                <div className="blog-more">
                  <div className="more-lhs">
                    <p>
                      <span>
                        <img src="/images/blogs/BlogViews.png" />
                      </span>
                      <span>20</span>
                    </p>
                    <p>
                      <span>
                        <img src="/images/blogs/BlogComments.png" />
                      </span>
                      <span>5</span>
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: "/blog-child",
                    }}
                  >
                    <a href="#" className="blog-readmore">
                      Read More...
                    </a>
                  </Link>
                </div>
              </figcaption>
            </figure>
          </aside>
          <aside className="blog-rhs">
            <div className="rhsCommonDiv">
              <h3>Categories</h3>
              <ul>
                <li>
                  <a>
                    Category <span>(3)</span>
                  </a>
                </li>
                <li>
                  <a>
                    Category <span>(3)</span>
                  </a>
                </li>
                <li>
                  <a>
                    Category <span>(3)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="newsLetter searchBlog">
              <div className="searchDiv">
                <input type="text" placeholder="SEARCH"></input>
                <button></button>
              </div>
            </div>

            <div className="rhsCommonDiv">
              <h3>Archives</h3>
              <ul>
                <li>
                  <a>
                    2021 <span>(3)</span>
                  </a>
                </li>
                <li>
                  <a>
                    2020 <span>(3)</span>
                  </a>
                </li>
                <li>
                  <a>
                    2019 <span>(3)</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* subscription div starts here */}
      <div className="subscription">
        <aside className="subscription-lhs">
          <h3>Subscription for RXIL Newsletter</h3>
          <p>We won't spam you, we promise!</p>
        </aside>
        <aside className="subscription-rhs">
          <input type="text" placeholder="Enter your E-mail address..."></input>
          <button>Submit</button>
        </aside>
      </div>
      {/* subscription div ends here */}
      {/* Blog Section ends here */}
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
        #blogs {
          padding: 70px 10%;
        }

        .blog-lhs {
          width: 70%;
          float: left;
        }

        .blog-lhs figure {
          margin-bottom: 40px;
        }

        .blog-lhs figure:after {
          display: block;
          content: "";
          clear: both;
        }

        .blog-rhs {
          width: 30%;
          float: left;
          padding-left: 40px;
        }

        .blog-details {
          float: left;
          width: 220px;
        }

        .blog-details .blog-img {
          width: 100px;
          display: inline-block;
          vertical-align: middle;
        }

        .blog-details .blog-date {
          display: inline-block;
          vertical-align: middle;
          margin-right: 20px;
          color: #666;
        }

        .blog-details .blog-img img {
          width: 100%;
        }

        .blog-lhs figure figcaption {
          float: left;
          width: calc(100% - 250px);
          position: relative;
          margin-left: 30px;
          box-sizing: border-box;
          padding: 10px;
          box-shadow: 0 0 5px #333;
        }

        .blog-lhs figure figcaption:after {
          content: "";
          position: absolute;
          top: 20px;
          left: -20px;
          border-right: 20px solid #b3a7a7;
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;
          z-index: 1;
        }

        .blog-lhs figure figcaption:before {
          content: "";
          position: absolute;
          top: 20px;
          left: -18px;
          border-right: 20px solid #fff;
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;
          z-index: 2;
        }

        .blog-lhs figure figcaption h2 {
          color: #666;
          font-size: 20px;
          line-height: 25px;
          margin-bottom: 15px;
        }

        .blog-lhs figure figcaption .blog-author {
          font-size: 12px;
          line-height: 18px;
          margin-bottom: 5px;
        }

        .blog-lhs figure figcaption .blog-author strong {
          color: #3340de;
        }

        .blog-lhs figure figcaption p {
          margin-bottom: 10px;
        }

        .blog-more:after {
          display: block;
          content: "";
          clear: both;
        }

        .blog-more .more-lhs {
          float: left;
        }

        .blog-more .more-lhs p {
          display: inline-block;
          vertical-align: middle;
        }

        .blog-more .more-lhs p span {
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }

        .blog-readmore {
          float: right;
          font-style: italic;
        }

        #blogs:after {
          content: "";
          display: block;
          clear: both;
        }

        .blogHeaderImage {
          width: 100%;
          height: 90%;
        }

        .heroBlogImage {
          margin-bottom: 50px;
        }

        .rhsCommonDiv {
          margin-bottom: 30px;
        }
        .rhsCommonDiv h3 {
          font-size: 22px;
          line-height: 28px;
          color: #105682;
          margin-bottom: 20px;
        }

        .rhsCommonDiv ul {
          padding-left: 20px;
          list-style: none;
        }

        .rhsCommonDiv ul li {
          margin-bottom: 10px;
        }

        .rhsCommonDiv ul li a {
          color: black;
          padding: 0 30px 10px 0px;
          display: inline-block;
          border-bottom: 1px solid #ccc;
          width: 140px;
        }

        .rhsCommonDiv ul li a span {
          color: #105682;
        }

        .searchBlog button {
          background-image: url("images/blogs/SearchIcon.png");
          background-repeat: no-repeat;
          background-position: center;
        }

        .searchBlog {
          padding: 20px;
          background: #e0dbdb;
          margin-bottom: 30px;
        }

        .searchDiv {
          position: relative;
        }

        .blog-container {
          max-width: 1080px;
          margin: 0 auto;
        }
        .subscription {
          background: #919191;
          padding: 20px 10%;
          margin-bottom: 50px;
          color: #fff;
        }

        .subscription:after {
          display: block;
          content: "";
          clear: both;
        }

        .subscription-lhs {
          float: left;
          padding-top: 10px;
        }
        .subscription-rhs {
          float: right;
          padding-top: 26px;
        }

        .subscription-rhs input {
          background: #d2cfcf;
          color: #000;
          width: 400px;
          margin-right: 20px;
          box-shadow: none;
          border: none;
          height: 40px;
        }

        .subscription-rhs input:focus {
          box-shadow: none;
          border: none;
          outline: none;
        }

        .subscription-rhs button {
          background: #105682;
          color: #fff;
          box-shadow: none;
          border: none;
          height: 40px;
          padding-left: 20px;
          padding-right: 20px;
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
