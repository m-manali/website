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

export default function BlogChild() {
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
      <section id="blogsChild">
        <div className="blog-container">
          <aside className="blog-lhs">
            <article>
              <div className="articleImage">
                <img src="/images/blogs/blogChild/ChildHero.png" />
              </div>
              <h1 className="articleHeading">
                How companies are leveraging technology to ease MSME financing
              </h1>
              <div className="articleConent">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </article>

            <div className="comment-container">
              <img
                className="comment-img"
                src="images/blogs/blogChild/CommentImage.png"
              />
              <div className="comment-details">
                <h3>Vipin Singh</h3>
                <p>
                  In et volutpat risus. Vestibulum at elementum nibh, at laoreet
                  mauris. Ut eget mi in nisl rhoncus suscipit. Donec sed
                  elementum dui. Sed tempus sagittis gravida. Etiam sit amet
                  aliquam mauris, non sodales sapien. Curabitur non arcu
                  dignissim, consectetur mi ut.
                </p>
              </div>
            </div>

            <div className="social-blog">
              <div className="social-lhs">
                <a href="#">
                  <img src="images/blogs/blogChild/twitter.png" />
                </a>
                <a href="#">
                  <img src="images/blogs/blogChild/facebook.png" />
                </a>
                <a href="#">
                  <img src="images/blogs/blogChild/linkedin.png" />
                </a>
              </div>
              <div className="social-rhs">
                <a href="javacript:void(0)">
                  <span style={{ lineHeight: "0" }}>
                    <img src="images/blogs/blogChild/Views.png" />
                  </span>
                  <span>20</span>
                </a>
                <a href="javacript:void(0)">
                  <span>
                    <img src="images/blogs/blogChild/Calender.png" />
                  </span>
                  <span>13 May 2020</span>
                </a>
              </div>
            </div>
            <div className="storypagination">
              <p className="prev-story">Previous Blog</p>
              <p className="next-story">Next Blog</p>
            </div>

            <div className="comment-form">
              <h3>Post a Comment</h3>
              <p className="register-link">
                New user ? <a href="#">Login</a> / <a href="#">Register</a> here
                to submit comment
              </p>
              <form method="POST">
                <div className="form-container">
                  <textarea placeholder="Your comment here"></textarea>
                </div>
                <div className="form-container">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                </div>
                <button className="comment-submit">Submit</button>
              </form>
            </div>
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

            <div className="rhsCommonDiv latestBlogSection">
              <h3>Latest</h3>
              <ul>
                <li>
                  <a href="#" className="latestBlogImage">
                    <img src="/images/blogs/blogChild/LatestBlog.png"></img>
                  </a>
                  <div className="latestBlogContent">
                    <h2>
                      How companies are leveraging technology to ease MSME
                      financing
                    </h2>
                    <p className="latestBlogDate">13 May 2020</p>
                  </div>
                </li>
                <li>
                  <a href="#" className="latestBlogImage">
                    <img src="/images/blogs/blogChild/LatestBlog.png"></img>
                  </a>
                  <div className="latestBlogContent">
                    <h2>
                      How companies are leveraging technology to ease MSME
                      financing
                    </h2>
                    <p className="latestBlogDate">13 May 2020</p>
                  </div>
                </li>
                <li>
                  <a href="#" className="latestBlogImage">
                    <img src="/images/blogs/blogChild/LatestBlog.png"></img>
                  </a>
                  <div className="latestBlogContent">
                    <h2>
                      How companies are leveraging technology to ease MSME
                      financing
                    </h2>
                    <p className="latestBlogDate">13 May 2020</p>
                  </div>
                </li>
              </ul>
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

            <div className="rhsCommonDiv latestBlogSection">
              <h3>Latest</h3>
              <ul>
                <li>
                  <a href="#" className="latestBlogImage">
                    <img src="/images/blogs/blogChild/LatestBlog.png"></img>
                  </a>
                  <div className="latestBlogContent">
                    <h2>
                      How companies are leveraging technology to ease MSME
                      financing
                    </h2>
                    <p className="latestBlogDate">13 May 2020</p>
                  </div>
                </li>
                <li>
                  <a href="#" className="latestBlogImage">
                    <img src="/images/blogs/blogChild/LatestBlog.png"></img>
                  </a>
                  <div className="latestBlogContent">
                    <h2>
                      How companies are leveraging technology to ease MSME
                      financing
                    </h2>
                    <p className="latestBlogDate">13 May 2020</p>
                  </div>
                </li>
                <li>
                  <a href="#" className="latestBlogImage">
                    <img src="/images/blogs/blogChild/LatestBlog.png"></img>
                  </a>
                  <div className="latestBlogContent">
                    <h2>
                      How companies are leveraging technology to ease MSME
                      financing
                    </h2>
                    <p className="latestBlogDate">13 May 2020</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

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
        #blogsChild {
          padding: 70px 10%;
          min-height: auto;
        }

        #blogsChild:after {
          content: "";
          display: block;
          clear: both;
        }

        .blog-lhs {
          width: 70%;
          float: left;
        }

        .blog-rhs {
          width: 30%;
          float: left;
          padding-left: 40px;
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

        .articleImage {
          margin-bottom: 20px;
        }

        .articleImage img {
          width: 100%;
        }

        .articleHeading {
          color: #919191;
          margin-bottom: 20px;
          font-size: 30px;
          line-height: 36px;
        }

        .articleContent p {
          margin-bottom: 10px;
        }

        .heroBlogImage img {
          width: 100%;
        }

        .latestBlogSection li .latestBlogImage {
          float: left;
          display: block;
          width: 90px !important;
          margin-right: 10px;
          padding: 0px !important;
          border: none;
        }

        .latestBlogSection li .latestBlogImage img {
          width: 100%;
        }

        .latestBlogSection li .latestBlogContent {
          float: left;
          width: calc(100% - 100px);
        }

        .latestBlogSection li .latestBlogContent h2 {
          font-size: 18px;
          line-height: 24px;
          color: #919191;
          max-height: 48px;
          overflow: hidden;
        }

        .latestBlogSection li:after {
          content: "";
          display: block;
          clear: both;
        }

        .comment-container {
          background: #eae9ea;
          padding: 20px 50px;
          margin-bottom: 50px;
        }

        .comment-container:after {
          display: block;
          content: "";
          clear: both;
        }

        .comment-img {
          display: inline-block;
          vertical-align: middle;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          margin-right: 30px;
        }

        .comment-details {
          display: inline-block;
          vertical-align: middle;
          width: calc(100% - 130px);
        }

        .comment-details h3 {
          color: #314d64;
          margin-bottom: 10px;
        }

        .social-blog {
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 3px solid #bbced8;
        }

        .storypagination {
          padding: 0px 15px;
        }

        .social-blog:after,
        .storypagination:after {
          display: block;
          content: "";
          clear: both;
        }

        .social-lhs {
          float: left;
        }

        .social-lhs a {
          float: left;
          margin-right: 10px;
        }
        .social-lhs a img {
          width: 40px;
        }

        .social-rhs {
          float: right;
          padding-top: 15px;
        }

        .social-rhs a {
          float: right;
          margin-left: 30px;
        }

        .social-rhs a span {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
          color: #7b777b;
        }

        .social-rhs a img {
          width: 25px;
        }

        .prev-story {
          float: left;
          color: #105682;

          position: relative;
        }

        .prev-story:after {
          position: absolute;
          content: "";
          left: -15px;
          top: 4px;
          border-right: 10px solid #ff9100;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }

        .next-story {
          float: right;
          color: #105682;

          position: relative;
        }

        .next-story:after {
          position: absolute;
          content: "";
          right: -15px;
          top: 6px;
          border-left: 10px solid #ff9100;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }

        .form-container {
          margin-bottom: 20px;
        }

        .form-container:after {
          display: block;
          content: "";
          clear: both;
        }

        .form-container textarea {
          width: 100%;
          height: 200px;
          border: 1px solid #999;
          resize: vertical;
          padding:10px;
        }

        .form-container input {
          display: block;
          float: left;
          width: 48%;
          box-sizing: border-box;
          padding: 7px 10px;
          border: 1px solid #999;
        }

        .form-container input:focus,
        .form-container textarea:focus {
          outline: #333;
          border: 1px solid #666;
        }

        .form-container input:last-of-type {
          margin-left: 4%;
        }

        .comment-submit {
          color: #fff;
          background: #095286;
          box-shadow: none;
          outline: none;
          border: none;
          padding: 5px 20px;
        }

        .comment-form {
          margin-top: 20px;
        }

        .comment-form h3 {
          margin-bottom: 20px;
          color: #095286;
        }

        .comment-form .register-link {
          margin-bottom: 20px;
          font-size: 15px;
          line-height: 20px;
          font-style: italic;
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
